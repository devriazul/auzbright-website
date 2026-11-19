@php
    use App\Support\Demo;
    $document = $this->record;
    $template = $this->getTemplate();
    $deal = Demo::deal($document['related_to']);
    $contact = Demo::inquiries()->firstWhere('contact', $document['contact']);
    $signerIcons = ['signed' => 'heroicon-m-check-circle', 'viewed' => 'heroicon-m-eye', 'sent' => 'heroicon-m-envelope', 'pending' => 'heroicon-m-clock', 'declined' => 'heroicon-m-x-circle'];
    $signerLabels = ['signed' => 'Signed', 'viewed' => 'Viewed, not signed', 'sent' => 'Waiting', 'pending' => 'Not sent', 'declined' => 'Declined'];
@endphp
<x-filament-panels::page>
    @if ($document['status'] === 'declined')
        <div class="ab-callout ab-callout--danger">
            <x-filament::icon icon="heroicon-m-x-circle" class="size-5 shrink-0" />
            <span><strong>Declined by {{ $document['contact'] }}.</strong> Reason: {{ $document['decline_reason'] }}</span>
        </div>
    @elseif ($document['status'] === 'expired')
        <div class="ab-callout ab-callout--danger">
            <x-filament::icon icon="heroicon-m-clock" class="size-5 shrink-0" />
            <span><strong>Expired {{ $document['expires_at']->diffForHumans() }}.</strong> Use "Copy and resend" to send a new link.</span>
        </div>
    @endif

    <div class="ab-record ab-record--doc">
        {{-- Document preview --}}
        <x-filament::section heading="Preview" :description="'Template '.$template['name'].' v'.$template['version'].' · fields filled from '.$document['related_to']">
            <div class="ab-paper">
                <div class="ab-paper__head">
                    <img src="{{ asset('images/auzbright-logo.png') }}" alt="Auzbright" class="h-6">
                    <span class="font-mono text-[11px] text-gray-500">{{ $document['id'] }}</span>
                </div>
                <h3 class="ab-paper__title">{{ $document['title'] }}</h3>
                <dl class="ab-paper__meta">
                    <div><dt>Customer</dt><dd>{{ $document['contact'] }}</dd></div>
                    <div><dt>Address</dt><dd>{{ $contact ? $contact['suburb'].' '.$contact['state'].' '.$contact['postcode'] : 'Site address on file' }}</dd></div>
                    <div><dt>Reference</dt><dd>{{ $document['related_to'] }}</dd></div>
                    <div><dt>Date</dt><dd>{{ ($document['sent_at'] ?? now())->format('j M Y') }}</dd></div>
                </dl>
                @if ($deal)
                    <table class="ab-paper__table">
                        <thead><tr><th>Item</th><th class="text-right">Amount</th></tr></thead>
                        <tbody>
                            <tr><td>{{ $deal['title'] }}, supplied and installed</td><td class="text-right">{{ Demo::money($deal['amount_cents'] + 120000) }}</td></tr>
                            <tr><td>{{ $deal['scheme'] ?? 'Incentive' }} discount (estimate)</td><td class="text-right">−{{ Demo::money(120000) }}</td></tr>
                            <tr class="font-semibold"><td>Total incl. GST</td><td class="text-right">{{ $deal['amount_cents'] ? Demo::money($deal['amount_cents']) : '$0' }}</td></tr>
                        </tbody>
                    </table>
                @endif
                <div class="ab-paper__lines" aria-hidden="true"><span></span><span></span><span></span><span class="w-2/3"></span></div>

                <div class="ab-paper__signs">
                    @foreach ($document['signers'] as $signer)
                        <div @class(['ab-sign-field', 'ab-sign-field--signed' => $signer['status'] === 'signed'])>
                            <span class="ab-sign-field__label">{{ $signer['role'] }} signature</span>
                            @if ($signer['status'] === 'signed')
                                <span class="ab-script">{{ $signer['name'] }}</span>
                            @else
                                <span class="ab-sign-field__tag">
                                    <x-filament::icon icon="heroicon-m-pencil" class="size-3.5" /> Sign here
                                </span>
                            @endif
                            <span class="ab-sign-field__name">{{ $signer['name'] }}</span>
                        </div>
                    @endforeach
                </div>
            </div>
        </x-filament::section>

        <div class="flex flex-col gap-6">
            <x-filament::section heading="Details">
                <dl class="ab-fields">
                    <div><dt>Status</dt><dd><x-filament::badge :color="Demo::documentStatusColor($document['status'])">{{ Demo::DOCUMENT_STATUSES[$document['status']] }}</x-filament::badge></dd></div>
                    <div><dt>Related to</dt><dd>
                        @if ($url = $this->getRelatedUrl())
                            <x-filament::link :href="$url">{{ $document['related_to'] }}</x-filament::link>
                        @else
                            {{ $document['related_to'] }}
                        @endif
                    </dd></div>
                    <div><dt>Sent by</dt><dd>{{ $document['sender'] }}</dd></div>
                    <div><dt>Sent</dt><dd>{{ $document['sent_at']?->format('j M Y, g:i a') ?? 'Not sent' }}</dd></div>
                    <div><dt>Expires</dt><dd>{{ $document['expires_at']?->format('j M Y') ?? '–' }}</dd></div>
                    <div><dt>Signing provider</dt><dd>{{ $document['provider'] }}</dd></div>
                    <div class="col-span-2"><dt>When completed</dt><dd>{{ $template['on_complete'] }}</dd></div>
                </dl>
            </x-filament::section>

            <x-filament::section heading="Signers" description="Signed in this order">
                <ol class="ab-list">
                    @foreach ($document['signers'] as $signer)
                        <li class="flex items-center gap-3 py-2.5">
                            <span class="ab-step-num">{{ $signer['order'] }}</span>
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-gray-950 dark:text-white">{{ $signer['name'] }}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ $signer['role'] }}{{ $signer['role'] === 'Customer' ? ' · '.$document['email'] : ' · signs after the customer' }}</p>
                            </div>
                            <span @class([
                                'inline-flex items-center gap-1 text-xs font-medium',
                                'text-success-600 dark:text-success-400' => $signer['status'] === 'signed',
                                'text-danger-600 dark:text-danger-400' => $signer['status'] === 'declined',
                                'text-gray-500 dark:text-gray-400' => ! in_array($signer['status'], ['signed', 'declined'], true),
                            ])>
                                <x-filament::icon :icon="$signerIcons[$signer['status']]" class="size-4" />
                                {{ $signerLabels[$signer['status']] }}
                            </span>
                        </li>
                    @endforeach
                </ol>
            </x-filament::section>

            <x-filament::section heading="Audit trail" description="Kept with the signed PDF as the completion certificate">
                <ol class="ab-timeline">
                    @foreach ($this->getEvents() as $event)
                        <li class="ab-timeline__item">
                            <span class="ab-timeline__icon"><x-filament::icon :icon="$event['icon']" class="size-4" /></span>
                            <div class="min-w-0 flex-1">
                                <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                                    <p class="text-sm font-medium text-gray-950 dark:text-white">{{ $event['title'] }}</p>
                                    <time class="text-xs text-gray-500 dark:text-gray-400" datetime="{{ $event['at']->toIso8601String() }}">{{ $event['at']->format('j M, g:i a') }}</time>
                                </div>
                                <p class="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{{ $event['body'] }}</p>
                            </div>
                        </li>
                    @endforeach
                </ol>
            </x-filament::section>
        </div>
    </div>
</x-filament-panels::page>
