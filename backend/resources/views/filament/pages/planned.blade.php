<x-filament-panels::page>
    <x-filament::section>
        <div class="ab-planned">
            <span class="ab-planned__icon">
                <x-filament::icon :icon="static::getNavigationIcon()" class="size-7" />
            </span>
            <x-filament::badge color="gray">{{ $this->getLaunch() }}</x-filament::badge>
            <h2 class="text-lg font-semibold text-gray-950 dark:text-white">This screen is planned, not built yet</h2>
            <p class="max-w-xl text-sm text-gray-600 dark:text-gray-400">{{ $this->getSummary() }}</p>
            <ul class="ab-planned__list">
                @foreach ($this->getFeatures() as $feature)
                    <li>
                        <x-filament::icon icon="heroicon-m-check-circle" class="size-4 shrink-0 text-success-600 dark:text-success-400" />
                        <span>{{ $feature }}</span>
                    </li>
                @endforeach
            </ul>
        </div>
    </x-filament::section>
</x-filament-panels::page>
