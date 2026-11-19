<x-filament-widgets::widget>
    <x-filament::section heading="Integrations" description="Webhook inbox and reconciliation">
        <ul class="ab-list">
            @foreach ($this->getProviders() as $provider)
                <li class="flex items-start gap-3 py-2.5">
                    <span @class(['ab-dot mt-1.5', 'ab-dot--'.$provider['status']])></span>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium text-gray-950 dark:text-white">{{ $provider['name'] }}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ $provider['detail'] }}</p>
                    </div>
                    <span class="shrink-0 text-xs text-gray-500 dark:text-gray-400">{{ $provider['last'] }}</span>
                </li>
            @endforeach
        </ul>
        <x-slot name="footer">
            <x-filament::link :href="\App\Filament\Pages\WebhookInbox::getUrl()" size="sm">Open webhook inbox</x-filament::link>
        </x-slot>
    </x-filament::section>
</x-filament-widgets::widget>
