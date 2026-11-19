<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;

/**
 * Status of each provider's webhook pipeline (Meta, Aircall, Stripe, Mailgun, Zoho Sign).
 */
class IntegrationHealth extends Widget
{
    protected static ?int $sort = 3;

    protected string $view = 'filament.widgets.integration-health';

    /** @return list<array{name: string, detail: string, status: string, last: string}> */
    public function getProviders(): array
    {
        return [
            ['name' => 'Meta Lead Ads', 'detail' => '4 forms, reconciled 6 min ago', 'status' => 'warning', 'last' => '26 min ago · 1 failed'],
            ['name' => 'Aircall', 'detail' => '38 calls today', 'status' => 'success', 'last' => '2 min ago'],
            ['name' => 'Stripe', 'detail' => '2 open payment requests', 'status' => 'success', 'last' => '1 hr ago'],
            ['name' => 'Mailgun', 'detail' => 'Bounce rate 0.8%', 'status' => 'success', 'last' => '3 hr ago'],
            ['name' => 'Zoho Sign', 'detail' => '4 envelopes awaiting signature', 'status' => 'success', 'last' => '18 min ago'],
            ['name' => 'Zoho bridge', 'detail' => 'Syncing leads until cutover', 'status' => 'info', 'last' => '5 min ago'],
        ];
    }
}
