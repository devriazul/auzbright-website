@php
    use App\Support\Demo;
    $awaitingSignature = Demo::documents()->whereIn('status', ['sent', 'viewed', 'partly_signed'])->pluck('related_to')->all();
    $signed = Demo::documents()->where('status', 'completed')->pluck('related_to')->all();
@endphp
<x-filament-panels::page>
    <div class="ab-kanban">
        @foreach ($this->getColumns() as $column)
            <section @class(['ab-kanban__col', 'ab-kanban__col--won' => $column['key'] === 'won'])>
                <header class="ab-kanban__head">
                    <div class="flex items-center gap-2">
                        <h2 class="text-sm font-semibold text-gray-950 dark:text-white">{{ $column['label'] }}</h2>
                        <x-filament::badge color="gray" size="sm">{{ count($column['deals']) }}</x-filament::badge>
                    </div>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ $column['total'] }}</p>
                </header>
                <div class="ab-kanban__cards">
                    @foreach ($column['deals'] as $deal)
                        <a href="{{ \App\Filament\Pages\DealRecord::getUrl(['deal' => $deal['id']]) }}" class="ab-card">
                            <div class="flex items-start justify-between gap-2">
                                <p class="text-sm font-semibold text-gray-950 dark:text-white">{{ $deal['contact'] }}</p>
                                <span class="font-mono text-[11px] text-gray-400">{{ $deal['id'] }}</span>
                            </div>
                            <p class="mt-0.5 text-sm text-gray-600 dark:text-gray-300">{{ $deal['title'] }}</p>
                            <div class="mt-3 flex flex-wrap items-center gap-1.5">
                                <x-filament::badge size="sm" color="gray">{{ $deal['state'] }}</x-filament::badge>
                                @if ($deal['scheme'])
                                    <x-filament::badge size="sm" color="info">{{ $deal['scheme'] }}</x-filament::badge>
                                @endif
                                @if (in_array($deal['id'], $awaitingSignature, true))
                                    <x-filament::badge size="sm" color="warning" icon="heroicon-m-pencil-square">Awaiting signature</x-filament::badge>
                                @elseif (in_array($deal['id'], $signed, true))
                                    <x-filament::badge size="sm" color="success" icon="heroicon-m-check-badge">Signed</x-filament::badge>
                                @endif
                                @if ($deal['overdue_tasks'])
                                    <x-filament::badge size="sm" color="danger" icon="heroicon-m-clock">{{ $deal['overdue_tasks'] }} overdue</x-filament::badge>
                                @endif
                            </div>
                            @if ($deal['note'])
                                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">{{ $deal['note'] }}</p>
                            @endif
                            <div class="mt-3 flex items-center justify-between border-t border-gray-100 pt-2.5 dark:border-white/5">
                                <span class="text-sm font-semibold text-gray-950 dark:text-white">{{ $deal['amount_cents'] ? Demo::money($deal['amount_cents']) : 'Free (VEU)' }}</span>
                                <span class="ab-avatar" title="{{ $deal['owner'] }}">{{ str($deal['owner'])->explode(' ')->map(fn ($p) => $p[0])->join('') }}</span>
                            </div>
                        </a>
                    @endforeach
                </div>
            </section>
        @endforeach
    </div>
</x-filament-panels::page>
