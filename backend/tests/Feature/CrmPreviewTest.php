<?php

namespace Tests\Feature;

use App\Filament\Pages\DealRecord;
use App\Filament\Pages\Inquiries;
use App\Filament\Widgets;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class CrmPreviewTest extends TestCase
{
    use RefreshDatabase;

    /** @return array<string, array{string, string}> */
    public static function pages(): array
    {
        return [
            'home' => ['/crm', 'Good '],
            'leads' => ['/crm/inquiries', 'Olivia Bennett'],
            'contacts' => ['/crm/contacts', 'Rahul Mehta'],
            'deals' => ['/crm/deals', 'Site assessment'],
            'deal record' => ['/crm/deals/D-1042', 'Daikin ducted, 5 zones'],
            'documents' => ['/crm/documents', 'SGN-3021'],
            'sign templates' => ['/crm/sign-templates', 'VEU assignment form'],
            'document viewed' => ['/crm/documents/SGN-3021', 'Viewed by Ruby Anderson'],
            'document partly signed' => ['/crm/documents/SGN-3019', 'Signed by Emily Clarke'],
            'document declined' => ['/crm/documents/SGN-3015', 'Going with another quote'],
            'document draft' => ['/crm/documents/SGN-3022', 'Draft created'],
            'deal documents list' => ['/crm/deals/D-1037', 'Installation agreement'],
            'tasks' => ['/crm/tasks', 'planned, not built yet'],
            'tickets' => ['/crm/tickets', 'Heat pump showing E4 error code'],
            'invoices' => ['/crm/invoices', 'AUZ-10424'],
            'campaigns' => ['/crm/campaigns', 'Mailgun'],
            'products' => ['/crm/products', 'Sungrow Battery'],
            'blog posts' => ['/crm/blog-posts', 'heat-pump-hot-water'],
            'pages' => ['/crm/content-pages', 'block library'],
            'faqs' => ['/crm/faqs', 'Reusable questions'],
            'webhooks' => ['/crm/webhook-inbox', 'leadgen 1204880457'],
            'users' => ['/crm/users', 'ava@auzbright.test'],
            'settings' => ['/crm/settings', 'Global settings'],
        ];
    }

    #[DataProvider('pages')]
    public function test_each_crm_screen_renders(string $url, string $expected): void
    {
        $this->actingAs(User::factory()->create(['name' => 'Ava Mitchell']))
            ->get($url)
            ->assertOk()
            ->assertSee($expected);
    }

    /** @return array<string, array{class-string, string}> */
    public static function widgets(): array
    {
        return [
            'kpis' => [Widgets\KpiOverview::class, 'Pipeline value'],
            'leads by source' => [Widgets\LeadsBySource::class, 'Leads by source'],
            'integrations' => [Widgets\IntegrationHealth::class, 'Meta Lead Ads'],
            'recent inquiries' => [Widgets\RecentInquiries::class, 'Olivia Bennett'],
            'my day' => [Widgets\MyDay::class, 'Site visit: Sofia Petrov'],
            'pipeline by stage' => [Widgets\PipelineByStage::class, 'Pipeline by stage'],
            'leads by upgrade' => [Widgets\LeadsByUpgrade::class, 'Leads by upgrade'],
            'awaiting signature' => [Widgets\AwaitingSignature::class, 'Ruby Anderson'],
        ];
    }

    /** @param class-string $widget */
    #[DataProvider('widgets')]
    public function test_each_dashboard_widget_renders(string $widget, string $expected): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test($widget)->assertOk()->assertSee($expected);
    }

    public function test_lead_search_matches_a_local_phone_number_and_filters_by_status(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(Inquiries::class)
            ->searchTable('0412 118')
            ->assertSee('Olivia Bennett')
            ->assertDontSee('Rahul Mehta')
            ->searchTable(null)
            ->filterTable('status', 'review')
            ->assertSee('Unknown caller')
            ->assertDontSee('Olivia Bennett');
    }

    public function test_send_for_signature_opens_prefilled_and_sends_nothing(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(DealRecord::class, ['deal' => 'D-1042'])
            ->mountAction('send_for_signature')
            ->assertSchemaStateSet(['template' => 'TPL-QUOTE', 'name' => 'Sofia Petrov', 'email' => 'sofia.p@example.com'])
            ->callMountedAction()
            ->assertHasNoFormErrors()
            ->assertNotified('Preview only: nothing was sent');
    }

    /** @return array<string, array{string, string}> */
    public static function signingPages(): array
    {
        return [
            'email link' => ['/sign/SGN-3021', 'emailed to'],
            'in person' => ['/sign/SGN-3021?mode=in-person', 'In-person signing'],
            'already signed' => ['/sign/SGN-3018', 'already signed'],
            'declined' => ['/sign/SGN-3015', 'You declined this document'],
            'expired' => ['/sign/SGN-3013', 'This link has expired'],
        ];
    }

    #[DataProvider('signingPages')]
    public function test_the_customer_signing_page_needs_no_login(string $url, string $expected): void
    {
        $this->get($url)->assertOk()->assertSee($expected);
    }

    public function test_an_unknown_signing_link_is_not_found(): void
    {
        $this->get('/sign/SGN-0000')->assertNotFound();
    }

    public function test_an_unknown_deal_is_not_found(): void
    {
        $this->actingAs(User::factory()->create())->get('/crm/deals/D-0000')->assertNotFound();
    }

    public function test_guests_are_sent_to_the_login_page(): void
    {
        $this->get('/crm')->assertRedirect('/crm/login');
        $this->get('/crm/login')->assertOk();
    }
}
