@php
    $icons = ['call' => 'heroicon-m-phone', 'meeting' => 'heroicon-m-map-pin', 'email' => 'heroicon-m-envelope'];
    $tasks = $this->getTasks();
@endphp
<x-filament-widgets::widget>
    <x-filament::section heading="My day" :description="collect($tasks)->where('done', false)->count().' tasks left'">
        <x-slot name="afterHeader">
            <x-filament::badge color="danger">1 overdue</x-filament::badge>
        </x-slot>
        <ul class="ab-list">
            @foreach ($tasks as $task)
                <li class="flex items-center gap-3 py-2.5">
                    <span @class([
                        'flex size-8 shrink-0 items-center justify-center rounded-full',
                        'bg-gray-100 text-gray-400 dark:bg-white/5' => $task['done'],
                        'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400' => $task['overdue'],
                        'bg-primary-50 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300' => ! $task['done'] && ! $task['overdue'],
                    ])>
                        <x-filament::icon :icon="$task['done'] ? 'heroicon-m-check' : $icons[$task['type']]" class="size-4" />
                    </span>
                    <p @class([
                        'min-w-0 flex-1 text-sm',
                        'text-gray-400 line-through dark:text-gray-500' => $task['done'],
                        'text-gray-950 dark:text-white' => ! $task['done'],
                    ])>{{ $task['title'] }}</p>
                    <span @class([
                        'shrink-0 text-xs',
                        'font-semibold text-red-600 dark:text-red-400' => $task['overdue'],
                        'text-gray-500 dark:text-gray-400' => ! $task['overdue'],
                    ])>{{ $task['due'] }}</span>
                </li>
            @endforeach
        </ul>
    </x-filament::section>
</x-filament-widgets::widget>
