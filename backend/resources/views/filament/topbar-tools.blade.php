{{-- Placeholder for the plan's global search (name, phone or email) and quick-create menu. --}}
<div class="ab-topbar-tools">
    <label class="ab-search">
        <x-filament::icon icon="heroicon-m-magnifying-glass" class="size-4" />
        <input type="search" placeholder="Search name, phone or email" aria-label="Search contacts, inquiries and deals">
        <kbd>/</kbd>
    </label>
    <x-filament::dropdown placement="bottom-end">
        <x-slot name="trigger">
            <x-filament::button icon="heroicon-m-plus" size="sm">Create</x-filament::button>
        </x-slot>
        <x-filament::dropdown.list>
            <x-filament::dropdown.list.item icon="heroicon-m-inbox-arrow-down">Inquiry</x-filament::dropdown.list.item>
            <x-filament::dropdown.list.item icon="heroicon-m-user">Contact</x-filament::dropdown.list.item>
            <x-filament::dropdown.list.item icon="heroicon-m-briefcase">Deal</x-filament::dropdown.list.item>
            <x-filament::dropdown.list.item icon="heroicon-m-lifebuoy">Ticket</x-filament::dropdown.list.item>
            <x-filament::dropdown.list.item icon="heroicon-m-check-circle">Task</x-filament::dropdown.list.item>
        </x-filament::dropdown.list>
    </x-filament::dropdown>
</div>
