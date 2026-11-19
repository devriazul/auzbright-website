<?php

namespace App\Support;

use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * Sample data for the UI preview of the staff CRM.
 *
 * Nothing here is stored or real. Every screen reads from this class until the
 * modules in the architecture plan (Leads, Sales, Service, Finance, CMS ...)
 * get their own tables. People and phone numbers are made up.
 */
final class Demo
{
    public const STAFF = [
        'Ava Mitchell' => ['role' => 'Admin', 'team' => 'Management', 'email' => 'ava@auzbright.test'],
        'Liam Nguyen' => ['role' => 'Sales', 'team' => 'Sales VIC', 'email' => 'liam@auzbright.test'],
        'Zara Hussain' => ['role' => 'Sales', 'team' => 'Sales NSW', 'email' => 'zara@auzbright.test'],
        'Ethan Brooks' => ['role' => 'Support', 'team' => 'Service', 'email' => 'ethan@auzbright.test'],
        'Mia Rossi' => ['role' => 'Marketing', 'team' => 'Marketing', 'email' => 'mia@auzbright.test'],
        'Noah Kim' => ['role' => 'Finance', 'team' => 'Finance', 'email' => 'noah@auzbright.test'],
    ];

    public const CHANNELS = [
        'web_form' => 'Eligibility check',
        'quick_quote' => 'Quick quote',
        'chatbot' => 'Chat assistant',
        'facebook' => 'Facebook Lead Ads',
        'phone' => 'Aircall',
        'manual' => 'Manual',
    ];

    public const INQUIRY_STATUSES = [
        'new' => 'New',
        'contacted' => 'Contacted',
        'qualified' => 'Qualified',
        'review' => 'Needs review',
        'converted' => 'Converted',
        'lost' => 'Lost',
    ];

    public const DEAL_STAGES = [
        'new' => 'New',
        'contacted' => 'Contacted',
        'assessment' => 'Site assessment',
        'quote' => 'Quote sent',
        'won' => 'Won',
    ];

    public const UPGRADES = ['Heat pump', 'Air conditioning', 'Solar & battery', 'EV charger', 'LED lighting', 'Water filter'];

    /** @return Collection<string, array<string, mixed>> */
    public static function inquiries(): Collection
    {
        $rows = [
            ['Olivia Bennett', '+61 412 118 204', 'olivia.b@example.com', 'Derrimut', 'VIC', '3026', 'web_form', 'Heat pump', 'Emerald 270L All-in-One', 'new', null, 0, 12],
            ['Rahul Mehta', '+61 433 902 551', 'rahul.mehta@example.com', 'Parramatta', 'NSW', '2150', 'facebook', 'Heat pump', null, 'new', 'Zara Hussain', 0, 26],
            ['Grace Liu', '+61 401 774 390', 'grace.liu@example.com', 'Point Cook', 'VIC', '3030', 'quick_quote', 'Solar & battery', 'Sungrow Battery', 'contacted', 'Liam Nguyen', 1, 48],
            ['Jack Thompson', '+61 422 650 118', null, 'Blacktown', 'NSW', '2148', 'phone', 'Air conditioning', 'Midea Multi-Head System', 'contacted', 'Zara Hussain', 0, 95],
            ['Sofia Petrov', '+61 450 331 027', 'sofia.p@example.com', 'Tarneit', 'VIC', '3029', 'chatbot', 'Air conditioning', 'Daikin Ducted System', 'qualified', 'Liam Nguyen', 0, 140],
            ['Unknown caller', null, null, null, null, '30', 'web_form', 'Heat pump', null, 'review', null, 0, 175],
            ['Ahmed Karim', '+61 413 228 760', 'a.karim@example.com', 'Liverpool', 'NSW', '2170', 'facebook', 'Solar & battery', 'Tesla Battery', 'new', null, 2, 210],
            ['Chloe Martin', '+61 437 015 662', 'chloe.martin@example.com', 'Werribee', 'VIC', '3030', 'web_form', 'EV charger', null, 'qualified', 'Liam Nguyen', 0, 300],
            ['Ben Walker', '+61 419 880 431', 'ben.w@example.com', 'Penrith', 'NSW', '2750', 'quick_quote', 'Heat pump', 'Midea 280L All-in-One', 'converted', 'Zara Hussain', 0, 420],
            ['Hannah Scott', '+61 402 559 914', 'hannah.s@example.com', 'Sunshine', 'VIC', '3020', 'chatbot', 'Water filter', null, 'contacted', 'Liam Nguyen', 0, 610],
            ['Wei Zhang', '+61 448 162 377', 'wei.zhang@example.com', 'Hurstville', 'NSW', '2220', 'web_form', 'LED lighting', null, 'lost', 'Zara Hussain', 0, 900],
            ['Isabella Rossi', '+61 431 720 085', 'isabella.r@example.com', 'Altona', 'VIC', '3018', 'facebook', 'Air conditioning', 'Rinnai Multi-Head System', 'new', null, 0, 1100],
            ['Lucas Brown', '+61 405 993 210', 'lucas.brown@example.com', 'Castle Hill', 'NSW', '2154', 'phone', 'Solar & battery', 'Sigenergy Battery', 'qualified', 'Zara Hussain', 1, 1500],
            ['Emily Clarke', '+61 426 404 778', 'emily.c@example.com', 'Caroline Springs', 'VIC', '3023', 'quick_quote', 'Heat pump', 'NeoPower 315L All-in-One', 'converted', 'Liam Nguyen', 0, 2200],
            ['Mohammed Ali', '+61 438 557 106', 'm.ali@example.com', 'Bankstown', 'NSW', '2200', 'web_form', 'Heat pump', null, 'contacted', 'Zara Hussain', 0, 2900],
            ['Ruby Anderson', '+61 409 610 442', null, 'Footscray', 'VIC', '3011', 'manual', 'Air conditioning', 'Panasonic Ducted System', 'qualified', 'Liam Nguyen', 0, 3600],
        ];

        return collect($rows)->mapWithKeys(function (array $r, int $i): array {
            [$name, $phone, $email, $suburb, $state, $postcode, $channel, $upgrade, $product, $status, $owner, $repeats, $minutesAgo] = $r;
            $ref = 'INQ-'.(2160 - $i);

            return [$ref => [
                'ref' => $ref,
                'contact' => $name,
                'phone' => $phone,
                'email' => $email,
                'suburb' => $suburb,
                'state' => $state,
                'postcode' => $postcode,
                'channel' => $channel,
                'upgrade' => $upgrade,
                'product' => $product,
                'status' => $status,
                'owner' => $owner,
                'repeat_count' => $repeats,
                'received_at' => Carbon::now()->subMinutes($minutesAgo),
            ]];
        });
    }

    /** @return Collection<string, array<string, mixed>> */
    public static function deals(): Collection
    {
        $rows = [
            ['D-1048', 'Olivia Bennett', 'Emerald 270L heat pump', 'Heat pump', 'new', 0, 'Liam Nguyen', 'VIC', 'VEU', 1, 'Call back after 5pm'],
            ['D-1047', 'Ahmed Karim', 'Tesla Powerwall 3', 'Solar & battery', 'new', 1489000, 'Zara Hussain', 'NSW', 'Cheaper Home Batteries', 0, 'Wants finance options'],
            ['D-1046', 'Isabella Rossi', 'Rinnai multi-head, 3 rooms', 'Air conditioning', 'new', 812000, 'Liam Nguyen', 'VIC', 'VEU', 0, null],
            ['D-1045', 'Grace Liu', 'Sungrow 12.8 kWh + 6.6 kW solar', 'Solar & battery', 'contacted', 1675000, 'Liam Nguyen', 'VIC', 'Cheaper Home Batteries', 2, 'Sent battery comparison'],
            ['D-1044', 'Jack Thompson', 'Midea multi-head, 4 rooms', 'Air conditioning', 'contacted', 960000, 'Zara Hussain', 'NSW', 'ESS', 0, null],
            ['D-1043', 'Mohammed Ali', 'Heat pump 280L', 'Heat pump', 'contacted', 99000, 'Zara Hussain', 'NSW', 'ESS', 0, 'Landlord approval needed'],
            ['D-1042', 'Sofia Petrov', 'Daikin ducted, 5 zones', 'Air conditioning', 'assessment', 1420000, 'Liam Nguyen', 'VIC', 'VEU', 1, 'Site visit Thu 10am'],
            ['D-1041', 'Lucas Brown', 'Sigenergy 16 kWh battery', 'Solar & battery', 'assessment', 1350000, 'Zara Hussain', 'NSW', 'Cheaper Home Batteries', 0, 'Switchboard photo requested'],
            ['D-1040', 'Ruby Anderson', 'Panasonic ducted system', 'Air conditioning', 'quote', 1185000, 'Liam Nguyen', 'VIC', 'VEU', 0, 'Quote expires in 6 days'],
            ['D-1039', 'Chloe Martin', 'EV charger 7 kW', 'EV charger', 'quote', 189000, 'Liam Nguyen', 'VIC', null, 0, null],
            ['D-1038', 'Daniel Price', '10 kW solar system', 'Solar & battery', 'quote', 1090000, 'Zara Hussain', 'NSW', 'SRES', 0, 'Comparing two quotes'],
            ['D-1037', 'Ben Walker', 'Midea 280L heat pump', 'Heat pump', 'won', 49000, 'Zara Hussain', 'NSW', 'ESS', 0, 'Install booked 26 Nov'],
            ['D-1036', 'Emily Clarke', 'NeoPower 315L heat pump', 'Heat pump', 'won', 0, 'Liam Nguyen', 'VIC', 'VEU', 0, 'Installed, awaiting certificate'],
            ['D-1035', 'Sarah Wilson', 'Alpha ESS battery', 'Solar & battery', 'won', 1240000, 'Zara Hussain', 'NSW', 'Cheaper Home Batteries', 0, null],
        ];

        return collect($rows)->mapWithKeys(fn (array $r, int $i): array => [$r[0] => [
            'id' => $r[0],
            'contact' => $r[1],
            'title' => $r[2],
            'upgrade' => $r[3],
            'stage' => $r[4],
            'amount_cents' => $r[5],
            'owner' => $r[6],
            'state' => $r[7],
            'scheme' => $r[8],
            'overdue_tasks' => $r[9],
            'note' => $r[10],
            'updated_at' => Carbon::now()->subHours(3 + $i * 7),
        ]]);
    }

    /** @return array<string, mixed>|null */
    public static function deal(string $id): ?array
    {
        return self::deals()->get($id);
    }

    /** @return list<array<string, mixed>> */
    public static function timeline(): array
    {
        return [
            ['type' => 'document', 'icon' => 'heroicon-m-pencil-square', 'title' => 'Quote acceptance drafted for signature', 'body' => 'SGN-3022 · fields filled from this deal, not sent yet', 'at' => Carbon::now()->subMinutes(40)],
            ['type' => 'stage', 'icon' => 'heroicon-m-arrow-right-circle', 'title' => 'Stage changed to Site assessment', 'body' => 'Moved from Contacted by Liam Nguyen', 'at' => Carbon::now()->subHours(3)],
            ['type' => 'call', 'icon' => 'heroicon-m-phone-arrow-down-left', 'title' => 'Inbound call, 6 min 12 s', 'body' => 'Asked about zoning for the upstairs bedrooms. Tagged "site visit".', 'at' => Carbon::now()->subHours(4)],
            ['type' => 'email', 'icon' => 'heroicon-m-envelope', 'title' => 'Email sent: Your VEU eligibility', 'body' => 'Opened twice, link to the Victorian Energy Upgrades page clicked.', 'at' => Carbon::now()->subDay()],
            ['type' => 'note', 'icon' => 'heroicon-m-pencil-square', 'title' => 'Note', 'body' => 'Double storey, existing gas ducted heating to be decommissioned. Owner occupied.', 'at' => Carbon::now()->subDays(2)],
            ['type' => 'inquiry', 'icon' => 'heroicon-m-inbox-arrow-down', 'title' => 'Repeat enquiry from Chat assistant', 'body' => 'Same phone within 24 hours, added to INQ-2156 (repeat count 1).', 'at' => Carbon::now()->subDays(2)->subHours(2)],
            ['type' => 'inquiry', 'icon' => 'heroicon-m-inbox-arrow-down', 'title' => 'New enquiry from Chat assistant', 'body' => 'Upgrade: Air conditioning. Postcode 3029. Consent v3 recorded.', 'at' => Carbon::now()->subDays(2)->subHours(5)],
        ];
    }

    /** @return Collection<string, array<string, mixed>> */
    public static function contacts(): Collection
    {
        return self::inquiries()
            ->filter(fn (array $i): bool => $i['phone'] !== null)
            ->values()
            ->mapWithKeys(fn (array $i, int $n): array => ['C-'.(5310 - $n) => [
                'id' => 'C-'.(5310 - $n),
                'name' => $i['contact'],
                'phone' => $i['phone'],
                'email' => $i['email'],
                'suburb' => $i['suburb'],
                'state' => $i['state'],
                'owner' => $i['owner'] ?? 'Unassigned',
                'inquiries' => 1 + $i['repeat_count'] + ($n % 3 === 0 ? 1 : 0),
                'open_deals' => in_array($i['status'], ['qualified', 'contacted'], true) ? 1 : 0,
                'consent' => $n % 4 !== 1,
                'last_activity' => $i['received_at'],
            ]]);
    }

    /** @return Collection<string, array<string, mixed>> */
    public static function tickets(): Collection
    {
        $rows = [
            ['T-318', 'Emily Clarke', 'Heat pump showing E4 error code', 'Warranty', 'high', 'new', null, 90, 'VIC'],
            ['T-317', 'Sarah Wilson', 'Battery app not reporting', 'Support', 'normal', 'assigned', 'Ethan Brooks', 240, 'NSW'],
            ['T-316', 'Ben Walker', 'Reschedule installation date', 'Booking', 'low', 'in_progress', 'Ethan Brooks', 600, 'NSW'],
            ['T-315', 'Harper Lee', 'Noise from outdoor AC unit at night', 'Complaint', 'high', 'waiting_customer', 'Ethan Brooks', 1500, 'VIC'],
            ['T-314', 'Oscar Davies', 'VEU certificate not received', 'Compliance', 'normal', 'in_progress', 'Ava Mitchell', 2800, 'VIC'],
            ['T-313', 'Layla Hassan', 'Water filter cartridge replacement', 'Support', 'low', 'resolved', 'Ethan Brooks', 4300, 'VIC'],
            ['T-312', 'Jacob Turner', 'Invoice amount query', 'Billing', 'normal', 'closed', 'Noah Kim', 7200, 'NSW'],
        ];
        $slaHours = ['high' => 4, 'normal' => 24, 'low' => 72];

        return collect($rows)->mapWithKeys(function (array $r) use ($slaHours): array {
            $opened = Carbon::now()->subMinutes($r[7]);
            $due = $opened->copy()->addHours($slaHours[$r[4]]);
            $used = $r[7] / ($slaHours[$r[4]] * 60);

            return [$r[0] => [
                'id' => $r[0],
                'contact' => $r[1],
                'subject' => $r[2],
                'type' => $r[3],
                'priority' => $r[4],
                'status' => $r[5],
                'owner' => $r[6],
                'opened_at' => $opened,
                'sla_due' => $due,
                'sla_state' => in_array($r[5], ['resolved', 'closed'], true) ? 'met' : ($r[5] === 'waiting_customer' ? 'paused' : ($used >= 1 ? 'breached' : ($used >= .75 ? 'at_risk' : 'on_track'))),
                'state' => $r[8],
            ]];
        });
    }

    /** @return Collection<string, array<string, mixed>> */
    public static function invoices(): Collection
    {
        $rows = [
            ['AUZ-10421', 'Sarah Wilson', 1240000, 1240000, 'paid', 18],
            ['AUZ-10422', 'Ben Walker', 49000, 0, 'issued', 6],
            ['AUZ-10423', 'Emily Clarke', 33000, 33000, 'paid', 9],
            ['AUZ-10424', 'Daniel Price', 1090000, 300000, 'part_paid', 4],
            ['AUZ-10425', 'Jacob Turner', 189000, 0, 'overdue', 35],
            ['AUZ-10426', 'Oscar Davies', 820000, 0, 'draft', 1],
        ];

        return collect($rows)->mapWithKeys(fn (array $r): array => [$r[0] => [
            'number' => $r[0],
            'contact' => $r[1],
            'total_cents' => $r[2],
            'paid_cents' => $r[3],
            'balance_cents' => $r[2] - $r[3],
            'gst_cents' => intdiv($r[2], 11),
            'status' => $r[4],
            'issued_at' => Carbon::now()->subDays($r[5]),
            'due_at' => Carbon::now()->subDays($r[5])->addDays(14),
        ]]);
    }

    /** @return list<array<string, mixed>> */
    public static function tasks(): array
    {
        return [
            ['title' => 'Call Olivia Bennett about heat pump eligibility', 'due' => '9:30 am', 'type' => 'call', 'done' => true, 'overdue' => false],
            ['title' => 'Site visit: Sofia Petrov, Tarneit', 'due' => '10:00 am', 'type' => 'meeting', 'done' => false, 'overdue' => false],
            ['title' => 'Follow up quote D-1040 (Ruby Anderson)', 'due' => '11:30 am', 'type' => 'email', 'done' => false, 'overdue' => false],
            ['title' => 'Return missed call from 0433 902 551', 'due' => 'Yesterday', 'type' => 'call', 'done' => false, 'overdue' => true],
            ['title' => 'Send battery comparison to Grace Liu', 'due' => '3:00 pm', 'type' => 'email', 'done' => false, 'overdue' => false],
        ];
    }

    /** @return Collection<string, array<string, mixed>> */
    public static function webhookEvents(): Collection
    {
        $rows = [
            ['zohosign', 'request.viewed SGN-3021', 'processed', 1, null, 18],
            ['meta', 'leadgen 1204889311', 'processed', 1, null, 26],
            ['aircall', 'call.ended 88213004', 'processed', 1, null, 95],
            ['stripe', 'checkout.session.completed', 'processed', 1, null, 180],
            ['mailgun', 'delivered 9f2c1a', 'processed', 1, null, 200],
            ['zohosign', 'request.signed SGN-3019', 'processed', 1, null, 230],
            ['aircall', 'call.tagged 88212977', 'processed', 2, null, 260],
            ['meta', 'leadgen 1204880457', 'failed', 5, 'Graph API: (#100) Lead expired or not accessible', 400],
            ['mailgun', 'failed 7ab3e0 (hard bounce)', 'processed', 1, null, 520],
            ['stripe', 'charge.refunded', 'pending', 0, null, 1],
        ];

        return collect($rows)->mapWithKeys(fn (array $r, int $i): array => ['W-'.(9900 - $i) => [
            'id' => 'W-'.(9900 - $i),
            'provider' => $r[0],
            'event' => $r[1],
            'status' => $r[2],
            'attempts' => $r[3],
            'last_error' => $r[4],
            'received_at' => Carbon::now()->subMinutes($r[5]),
        ]]);
    }

    public const DOCUMENT_STATUSES = [
        'draft' => 'Draft',
        'sent' => 'Sent',
        'viewed' => 'Viewed',
        'partly_signed' => 'Partly signed',
        'completed' => 'Completed',
        'declined' => 'Declined',
        'expired' => 'Expired',
    ];

    public static function documentStatusColor(string $status): string
    {
        return match ($status) {
            'draft' => 'gray',
            'sent' => 'info',
            'viewed' => 'primary',
            'partly_signed' => 'warning',
            'completed' => 'success',
            default => 'danger',
        };
    }

    /**
     * E-signature templates (Documents module).
     *
     * @return Collection<string, array<string, mixed>>
     */
    public static function documentTemplates(): Collection
    {
        $rows = [
            ['TPL-QUOTE', 'Quote acceptance', 'Sales', 'Customer', 'Signature, full name, date, accept terms', 'Deal moves to Won and an install booking task is created', 'Both', 41, 6],
            ['TPL-VEU', 'VEU assignment form', 'Compliance', 'Customer, then installer', 'Customer signature, installer signature, install date, product', 'Certificate claim is unlocked on the deal', 'VIC', 18, 3],
            ['TPL-ESS', 'ESS nomination form', 'Compliance', 'Customer, then installer', 'Customer signature, installer signature, site address, product', 'Certificate claim is unlocked on the deal', 'NSW', 12, 2],
            ['TPL-INSTALL', 'Installation agreement', 'Operations', 'Customer', 'Signature, access notes, preferred date', 'Install can be scheduled', 'Both', 23, 4],
            ['TPL-FINANCE', 'Battery and finance consent', 'Finance', 'Customer', 'Signature, finance option, consent checkboxes', 'Finance team is notified', 'Both', 7, 2],
            ['TPL-WARRANTY', 'Warranty claim authorisation', 'Service', 'Customer', 'Signature, fault description, access consent', 'Attached to the service ticket', 'Both', 5, 1],
        ];

        return collect($rows)->mapWithKeys(fn (array $r): array => [$r[0] => [
            'id' => $r[0],
            'name' => $r[1],
            'owner_team' => $r[2],
            'signers' => $r[3],
            'fields' => $r[4],
            'on_complete' => $r[5],
            'states' => $r[6],
            'sent_30d' => $r[7],
            'version' => $r[8],
            'updated_at' => Carbon::now()->subDays(3 + $r[7]),
        ]]);
    }

    /**
     * Envelopes sent for signature. "signers" lists each recipient in signing order.
     *
     * @return Collection<string, array<string, mixed>>
     */
    public static function documents(): Collection
    {
        $rows = [
            ['SGN-3022', 'TPL-QUOTE', 'D-1042', 'Sofia Petrov', 'draft', null, [['Sofia Petrov', 'Customer', 'pending']], 'Liam Nguyen', null],
            ['SGN-3021', 'TPL-QUOTE', 'D-1040', 'Ruby Anderson', 'viewed', 2 * 24 * 60, [['Ruby Anderson', 'Customer', 'viewed']], 'Liam Nguyen', null],
            ['SGN-3020', 'TPL-INSTALL', 'D-1037', 'Ben Walker', 'sent', 5 * 60, [['Ben Walker', 'Customer', 'sent']], 'Zara Hussain', null],
            ['SGN-3019', 'TPL-VEU', 'D-1036', 'Emily Clarke', 'partly_signed', 26 * 60, [['Emily Clarke', 'Customer', 'signed'], ['Ethan Brooks', 'Installer', 'sent']], 'Liam Nguyen', null],
            ['SGN-3018', 'TPL-QUOTE', 'D-1037', 'Ben Walker', 'completed', 4 * 24 * 60, [['Ben Walker', 'Customer', 'signed']], 'Zara Hussain', null],
            ['SGN-3017', 'TPL-ESS', 'D-1037', 'Ben Walker', 'completed', 4 * 24 * 60, [['Ben Walker', 'Customer', 'signed'], ['Ethan Brooks', 'Installer', 'signed']], 'Zara Hussain', null],
            ['SGN-3016', 'TPL-FINANCE', 'D-1035', 'Sarah Wilson', 'completed', 9 * 24 * 60, [['Sarah Wilson', 'Customer', 'signed']], 'Zara Hussain', null],
            ['SGN-3015', 'TPL-QUOTE', 'D-1038', 'Daniel Price', 'declined', 3 * 24 * 60, [['Daniel Price', 'Customer', 'declined']], 'Zara Hussain', 'Going with another quote'],
            ['SGN-3014', 'TPL-WARRANTY', 'T-318', 'Emily Clarke', 'sent', 70, [['Emily Clarke', 'Customer', 'sent']], 'Ethan Brooks', null],
            ['SGN-3013', 'TPL-QUOTE', 'D-1039', 'Chloe Martin', 'expired', 16 * 24 * 60, [['Chloe Martin', 'Customer', 'viewed']], 'Liam Nguyen', null],
        ];
        $templates = self::documentTemplates();
        $emails = self::inquiries()->pluck('email', 'contact');

        return collect($rows)->mapWithKeys(function (array $r) use ($templates, $emails): array {
            [$id, $template, $relatedTo, $contact, $status, $sentMinutesAgo, $signers, $sender, $declineReason] = $r;
            $sentAt = $sentMinutesAgo === null ? null : Carbon::now()->subMinutes($sentMinutesAgo);

            return [$id => [
                'id' => $id,
                'template_id' => $template,
                'title' => $templates[$template]['name'],
                'related_to' => $relatedTo,
                'contact' => $contact,
                'email' => $emails[$contact] ?? str($contact)->lower()->replace(' ', '.').'@example.com',
                'status' => $status,
                'signers' => array_map(fn (array $s, int $i): array => ['order' => $i + 1, 'name' => $s[0], 'role' => $s[1], 'status' => $s[2]], $signers, array_keys($signers)),
                'signed_count' => count(array_filter($signers, fn (array $s): bool => $s[2] === 'signed')),
                'sender' => $sender,
                'sent_at' => $sentAt,
                'expires_at' => $sentAt?->copy()->addDays(14),
                'decline_reason' => $declineReason,
                'provider' => 'Zoho Sign',
            ]];
        });
    }

    /** @return array<string, mixed>|null */
    public static function document(string $id): ?array
    {
        return self::documents()->get($id);
    }

    /**
     * Audit trail for one envelope, newest first.
     *
     * @param  array<string, mixed>  $document
     * @return list<array{title: string, body: string, icon: string, at: Carbon}>
     */
    public static function documentEvents(array $document): array
    {
        if ($document['sent_at'] === null) {
            return [['title' => 'Draft created', 'body' => 'Fields filled from '.$document['related_to'].' by '.$document['sender'], 'icon' => 'heroicon-m-document-plus', 'at' => Carbon::now()->subMinutes(40)]];
        }

        $sent = $document['sent_at'];
        $events = [
            ['title' => 'Draft created', 'body' => 'Fields filled from '.$document['related_to'].' by '.$document['sender'], 'icon' => 'heroicon-m-document-plus', 'at' => $sent->copy()->subMinutes(12)],
            ['title' => 'Sent for signature', 'body' => 'Emailed to '.$document['email'].' · expires '.$document['expires_at']->format('j M Y'), 'icon' => 'heroicon-m-paper-airplane', 'at' => $sent],
        ];

        foreach ($document['signers'] as $i => $signer) {
            $base = $sent->copy()->addMinutes(35 + $i * 90);
            if (in_array($signer['status'], ['viewed', 'signed', 'declined'], true)) {
                $events[] = ['title' => 'Viewed by '.$signer['name'], 'body' => 'Email code verified · iPhone, Safari · 203.0.113.'.(20 + $i), 'icon' => 'heroicon-m-eye', 'at' => $base];
            }
            if ($signer['status'] === 'signed') {
                $events[] = ['title' => 'Signed by '.$signer['name'], 'body' => $signer['role'].' · drawn signature · document hash recorded', 'icon' => 'heroicon-m-pencil', 'at' => $base->copy()->addMinutes(6)];
            }
            if ($signer['status'] === 'declined') {
                $events[] = ['title' => 'Declined by '.$signer['name'], 'body' => 'Reason: '.$document['decline_reason'], 'icon' => 'heroicon-m-x-circle', 'at' => $base->copy()->addMinutes(4)];
            }
        }

        if ($document['status'] === 'completed') {
            $events[] = ['title' => 'Completed', 'body' => 'Signed PDF and completion certificate saved to the deal. Copy emailed to every signer.', 'icon' => 'heroicon-m-check-badge', 'at' => end($events)['at']->copy()->addMinute()];
        }
        if ($document['status'] === 'expired') {
            $events[] = ['title' => 'Expired', 'body' => 'Not signed within 14 days. Two reminders were sent.', 'icon' => 'heroicon-m-clock', 'at' => $document['expires_at']];
        }

        return array_reverse($events);
    }

    /** @return Collection<string, array<string, mixed>> Snapshot of frontend/content/products */
    public static function products(): Collection
    {
        return collect(self::json('products.json'))->mapWithKeys(fn (array $p): array => [$p['slug'] => $p + [
            'active' => true,
            'in_quote_form' => $p['category'] !== 'solar-system',
            'states' => 'VIC, NSW',
        ]]);
    }

    /** @return Collection<string, array<string, mixed>> Snapshot of frontend/content/blog */
    public static function posts(): Collection
    {
        return collect(self::json('posts.json'))
            ->sortByDesc('date')
            ->mapWithKeys(fn (array $p): array => [$p['slug'] => $p + ['status' => 'published', 'author' => 'Mia Rossi']]);
    }

    public static function money(int $cents): string
    {
        return '$'.number_format($cents / 100, $cents % 100 === 0 ? 0 : 2);
    }

    /**
     * Search, filter and sort a set of sample rows the way a database query would.
     *
     * @param  Collection<string, array<string, mixed>>  $rows
     * @param  list<string>  $searchIn
     * @param  array<string, mixed>  $filters
     * @return Collection<string, array<string, mixed>>
     */
    public static function query(Collection $rows, ?string $search, array $searchIn, array $filters = [], ?string $sortColumn = null, ?string $sortDirection = null): Collection
    {
        if (filled($search)) {
            $needle = mb_strtolower(preg_replace('/\s+/', '', $search));
            $rows = $rows->filter(function (array $row) use ($needle, $searchIn): bool {
                foreach ($searchIn as $key) {
                    $value = mb_strtolower(preg_replace('/\s+/', '', (string) ($row[$key] ?? '')));
                    // Phone search ignores spaces and the +61 prefix, as the plan asks.
                    if (str_contains($value, $needle) || ($key === 'phone' && str_contains(str_replace('+61', '0', $value), $needle))) {
                        return true;
                    }
                }

                return false;
            });
        }

        foreach ($filters as $name => $data) {
            if (filled($value = $data['value'] ?? null)) {
                $rows = $rows->where($name, $value);
            }
            if (filled($values = $data['values'] ?? null)) {
                $rows = $rows->whereIn($name, $values);
            }
        }

        if (filled($sortColumn)) {
            $rows = $rows->sortBy($sortColumn, SORT_REGULAR, $sortDirection === 'desc');
        }

        return $rows;
    }

    /** @return list<array<string, mixed>> */
    private static function json(string $file): array
    {
        $path = database_path('demo/'.$file);

        return is_file($path) ? json_decode((string) file_get_contents($path), true) : [];
    }
}
