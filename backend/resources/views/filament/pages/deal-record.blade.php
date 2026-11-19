@php
    use App\Support\Demo;
    $deal = $this->record;
    $contact = Demo::inquiries()->firstWhere('contact', $deal['contact']);
    $initials = fn (string $name): string => str($name)->explode(' ')->map(fn ($p) => $p[0])->join('');
@endphp
<x-filament-panels::page>
    {{-- Stage bar --}}
    <nav class="ab-stages" aria-label="Deal stage">
        @foreach ($this->getStages() as $stage)
            <span @class(['ab-stage', 'ab-stage--'.$stage['state']])>
                @if ($stage['state'] === 'done')
                    <x-filament::icon icon="heroicon-m-check" class="size-4" />
                @endif
                {{ $stage['label'] }}
            </span>
        @endforeach
    </nav>

    <div class="ab-record">
        {{-- Left: details and related lists --}}
        <div class="flex flex-col gap-6">
            <x-filament::section heading="Deal details">
                <dl class="ab-fields">
                    <div><dt>Amount</dt><dd>{{ $deal['amount_cents'] ? Demo::money($deal['amount_cents']) : 'Free under VEU' }}</dd></div>
                    <div><dt>Stage</dt><dd>{{ Demo::DEAL_STAGES[$deal['stage']] }}</dd></div>
                    <div><dt>Owner</dt><dd>{{ $deal['owner'] }}</dd></div>
                    <div><dt>Upgrade</dt><dd>{{ $deal['upgrade'] }}</dd></div>
                    <div><dt>Scheme</dt><dd>{{ $deal['scheme'] ?? 'None' }}</dd></div>
                    <div><dt>State</dt><dd>{{ $deal['state'] }}</dd></div>
                    <div><dt>Source</dt><dd>{{ Demo::CHANNELS[$contact['channel'] ?? 'manual'] }}</dd></div>
                    <div><dt>Expected close</dt><dd>{{ now()->addDays(12)->format('j M Y') }}</dd></div>
                </dl>
            </x-filament::section>

            <x-filament::section heading="Contact">
                <div class="flex items-center gap-3">
                    <span class="ab-avatar ab-avatar--lg">{{ $initials($deal['contact']) }}</span>
                    <div>
                        <p class="font-semibold text-gray-950 dark:text-white">{{ $deal['contact'] }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ $contact['phone'] ?? '+61 4xx xxx xxx' }} · {{ $contact['email'] ?? 'No email' }}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ $contact['suburb'] ?? '' }} {{ $deal['state'] }} {{ $contact['postcode'] ?? '' }}</p>
                    </div>
                </div>
            </x-filament::section>

            <x-filament::section heading="Documents" description="Sent for e-signature from this deal">
                @forelse ($this->getDocuments() as $document)
                    <a href="{{ \App\Filament\Pages\DocumentRecord::getUrl(['document' => $document['id']]) }}" class="ab-doc-row">
                        <x-filament::icon icon="heroicon-m-document-check" class="size-5 shrink-0 text-gray-400" />
                        <span class="min-w-0 flex-1">
                            <span class="block text-sm font-medium text-gray-950 dark:text-white">{{ $document['title'] }}</span>
                            <span class="block text-xs text-gray-500 dark:text-gray-400">{{ $document['id'] }} · {{ $document['signed_count'] }} of {{ count($document['signers']) }} signed</span>
                        </span>
                        <x-filament::badge size="sm" :color="Demo::documentStatusColor($document['status'])">{{ Demo::DOCUMENT_STATUSES[$document['status']] }}</x-filament::badge>
                    </a>
                @empty
                    <p class="text-sm text-gray-500 dark:text-gray-400">Nothing sent yet. Use "Send for signature" to send the quote.</p>
                @endforelse
            </x-filament::section>

            <x-filament::section heading="Related" collapsible>
                <ul class="ab-related">
                    <li><x-filament::icon icon="heroicon-m-inbox-arrow-down" class="size-4" /> Inquiries <x-filament::badge size="sm" color="gray">2</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-check-circle" class="size-4" /> Open tasks <x-filament::badge size="sm" color="danger">{{ $deal['overdue_tasks'] + 1 }}</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-document-text" class="size-4" /> Quotes <x-filament::badge size="sm" color="gray">1</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-document-check" class="size-4" /> Signed documents <x-filament::badge size="sm" color="gray">{{ $this->getDocuments()->where('status', 'completed')->count() }}</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-banknotes" class="size-4" /> Invoices <x-filament::badge size="sm" color="gray">0</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-phone" class="size-4" /> Calls <x-filament::badge size="sm" color="gray">3</x-filament::badge></li>
                    <li><x-filament::icon icon="heroicon-m-paper-clip" class="size-4" /> Files <x-filament::badge size="sm" color="gray">4</x-filament::badge></li>
                </ul>
            </x-filament::section>
        </div>

        {{-- Right: timeline --}}
        <x-filament::section heading="Timeline" description="Calls, emails, notes and stage changes in one place">
            <x-slot name="afterHeader">
                <x-filament::button size="sm" color="gray" icon="heroicon-m-pencil-square">Add note</x-filament::button>
            </x-slot>
            <ol class="ab-timeline">
                @foreach ($this->getTimeline() as $item)
                    <li class="ab-timeline__item">
                        <span @class(['ab-timeline__icon', 'ab-timeline__icon--'.$item['type']])>
                            <x-filament::icon :icon="$item['icon']" class="size-4" />
                        </span>
                        <div class="min-w-0 flex-1">
                            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                                <p class="text-sm font-medium text-gray-950 dark:text-white">{{ $item['title'] }}</p>
                                <time class="text-xs text-gray-500 dark:text-gray-400" datetime="{{ $item['at']->toIso8601String() }}">{{ $item['at']->diffForHumans() }}</time>
                            </div>
                            <p class="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{{ $item['body'] }}</p>
                        </div>
                    </li>
                @endforeach
            </ol>
        </x-filament::section>
    </div>
</x-filament-panels::page>
