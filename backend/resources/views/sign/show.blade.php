@php
    use App\Support\Demo;
    $firstName = str($document['contact'])->before(' ');
    $isOpen = in_array($document['status'], ['draft', 'sent', 'viewed', 'partly_signed'], true);
    $customerSigned = collect($document['signers'])->firstWhere('role', 'Customer')['status'] === 'signed';
@endphp
<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Sign: {{ $document['title'] }} · Auzbright</title>
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    {{ Vite::fonts() }}
    @vite('resources/css/app.css')
</head>
<body class="min-h-screen bg-mist font-sans text-navy antialiased">
    <header class="bg-navy">
        <div class="mx-auto flex max-w-xl items-center justify-between px-4 py-4">
            <img src="{{ asset('images/auzbright-logo-reversed.png') }}" alt="Auzbright" class="h-7">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
                <svg class="size-4 text-lime" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/></svg>
                Secure signing
            </span>
        </div>
    </header>

    <main class="mx-auto max-w-xl px-4 pb-16 pt-5">
        <p class="mb-4 rounded-lg border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-xs text-amber-800">
            <strong>Preview.</strong> This is a demo of the customer signing page. Nothing is sent or saved.
        </p>

        @if ($inPerson)
            <div class="mb-4 flex items-start gap-3 rounded-xl bg-navy px-4 py-3 text-sm text-white">
                <svg class="mt-0.5 size-5 shrink-0 text-lime" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7Zm2 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg>
                <span><strong class="font-semibold">In-person signing.</strong> Hand this device to {{ $document['contact'] }}. {{ $document['sender'] }} stays signed in to the CRM, but this screen shows only the document.</span>
            </div>
        @endif

        <section class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5 sm:p-7">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-teal">{{ $document['id'] }}</p>
            <h1 class="mt-1 text-2xl font-extrabold tracking-tight">{{ $document['title'] }}</h1>
            <p class="mt-1 text-sm text-slate-500">From {{ $document['sender'] }}, Auzbright · for {{ $document['contact'] }}</p>

            @if (! $isOpen || $customerSigned)
                {{-- Nothing left for the customer to do --}}
                <div class="mt-6 rounded-xl bg-slate-50 p-5 text-center">
                    @if ($document['status'] === 'completed' || $customerSigned)
                        <p class="text-lg font-bold">You've already signed this document</p>
                        <p class="mt-1 text-sm text-slate-600">A signed copy was emailed to {{ $maskedEmail }}.</p>
                    @elseif ($document['status'] === 'declined')
                        <p class="text-lg font-bold">You declined this document</p>
                        <p class="mt-1 text-sm text-slate-600">Call us on (03) 8609 5195 if you'd like a new quote.</p>
                    @else
                        <p class="text-lg font-bold">This link has expired</p>
                        <p class="mt-1 text-sm text-slate-600">Ask {{ $document['sender'] }} to send a new one, or call (03) 8609 5195.</p>
                    @endif
                </div>
            @else
                <ol class="mt-6 grid grid-cols-3 gap-2 text-xs font-semibold" aria-label="Steps">
                    @foreach (['Verify', 'Review', 'Sign'] as $i => $label)
                        <li data-step-dot="{{ $i + 1 }}" class="step-dot flex flex-col gap-1.5">
                            <span class="h-1.5 rounded-full bg-slate-200"></span>
                            <span class="text-slate-400">{{ $i + 1 }}. {{ $label }}</span>
                        </li>
                    @endforeach
                </ol>

                {{-- Step 1: verify --}}
                <div data-step="1" class="mt-6">
                    @if ($inPerson)
                        <h2 class="text-lg font-bold">Confirm who is signing</h2>
                        <p class="mt-1 text-sm text-slate-600">Staff: check the customer's photo ID before handing over the device.</p>
                        <label class="mt-4 flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm">
                            <input type="checkbox" class="mt-0.5 size-4 accent-navy" data-gate="1">
                            <span>I'm {{ $document['sender'] }} and I've checked the ID of <strong>{{ $document['contact'] }}</strong>.</span>
                        </label>
                    @else
                        <h2 class="text-lg font-bold">Hi {{ $firstName }}, let's check it's you</h2>
                        <p class="mt-1 text-sm text-slate-600">Enter the 6-digit code we emailed to <strong>{{ $maskedEmail }}</strong>.</p>
                        <div class="mt-4 flex gap-2" data-otp>
                            @for ($i = 0; $i < 6; $i++)
                                <input inputmode="numeric" maxlength="1" aria-label="Digit {{ $i + 1 }}" class="h-14 w-full min-w-0 rounded-xl border border-slate-300 text-center text-xl font-bold focus:border-navy focus:outline-none focus:ring-2 focus:ring-lime">
                            @endfor
                        </div>
                        <p class="mt-3 text-xs text-slate-500">Didn't get it? <button type="button" class="font-semibold text-navy underline">Send a new code</button> · Demo: type any 6 digits.</p>
                    @endif
                    <button type="button" data-next="2" class="btn-primary mt-6" disabled>Continue</button>
                </div>

                {{-- Step 2: review --}}
                <div data-step="2" class="mt-6" hidden>
                    <h2 class="text-lg font-bold">Review the document</h2>
                    @if ($deal)
                        <dl class="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200 text-sm">
                            <div class="flex justify-between gap-4 p-3"><dt class="text-slate-500">Upgrade</dt><dd class="text-right font-medium">{{ $deal['title'] }}</dd></div>
                            <div class="flex justify-between gap-4 p-3"><dt class="text-slate-500">Incentive</dt><dd class="font-medium">{{ $deal['scheme'] ?? 'None' }}</dd></div>
                            <div class="flex justify-between gap-4 p-3"><dt class="text-slate-500">Total incl. GST</dt><dd class="font-bold">{{ $deal['amount_cents'] ? Demo::money($deal['amount_cents']) : '$0' }}</dd></div>
                        </dl>
                    @endif
                    <a href="#" class="mt-3 flex items-center justify-between rounded-xl bg-mist px-4 py-3 text-sm font-semibold">
                        <span>Read the full document (PDF, 3 pages)</span>
                        <span aria-hidden="true">→</span>
                    </a>
                    <label class="mt-4 flex items-start gap-3 text-sm">
                        <input type="checkbox" class="mt-0.5 size-4 accent-navy" data-gate="2">
                        <span>I've read the document and agree to sign it electronically. I understand an electronic signature is as binding as one on paper.</span>
                    </label>
                    <button type="button" data-next="3" class="btn-primary mt-6" disabled>Continue to sign</button>
                    <button type="button" data-next="decline" class="mt-3 w-full text-center text-sm font-medium text-slate-500 underline">I don't want to sign</button>
                </div>

                {{-- Step 3: sign --}}
                <div data-step="3" class="mt-6" hidden>
                    <h2 class="text-lg font-bold">Add your signature</h2>
                    <div class="mt-4 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold" role="tablist">
                        <button type="button" role="tab" data-tab="draw" aria-selected="true" class="tab rounded-lg py-2">Draw</button>
                        <button type="button" role="tab" data-tab="type" aria-selected="false" class="tab rounded-lg py-2">Type</button>
                    </div>
                    <div data-panel="draw" class="mt-3">
                        <canvas data-pad class="h-44 w-full touch-none rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/50" aria-label="Draw your signature"></canvas>
                        <div class="mt-2 flex justify-between text-xs text-slate-500">
                            <span>Sign with your finger or mouse</span>
                            <button type="button" data-clear class="font-semibold text-navy underline">Clear</button>
                        </div>
                    </div>
                    <div data-panel="type" class="mt-3" hidden>
                        <label class="text-xs font-medium text-slate-500" for="typed-name">Full name</label>
                        <input id="typed-name" value="{{ $document['contact'] }}" class="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-lime">
                        <p data-typed class="mt-3 flex h-24 items-center justify-center rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/50 text-4xl" style="font-family: 'Segoe Script', 'Snell Roundhand', 'Brush Script MT', cursive">{{ $document['contact'] }}</p>
                    </div>
                    <button type="button" data-next="done" class="btn-primary mt-6">Sign and finish</button>
                    <p class="mt-3 text-xs leading-relaxed text-slate-500">We record the time, your device and a fingerprint of the document with your signature, so anyone can check it wasn't changed afterwards.</p>
                </div>

                {{-- Decline --}}
                <div data-step="decline" class="mt-6" hidden>
                    <h2 class="text-lg font-bold">Tell us why (optional)</h2>
                    <textarea rows="3" class="mt-3 w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-lime" placeholder="For example, I'd like to change the system size"></textarea>
                    <button type="button" data-next="declined" class="mt-4 w-full rounded-full border-2 border-navy py-3.5 font-semibold">Decline to sign</button>
                    <button type="button" data-next="2" class="mt-3 w-full text-center text-sm font-medium text-slate-500 underline">Go back</button>
                </div>

                {{-- Finished --}}
                <div data-step="done" class="mt-6 text-center" hidden>
                    <span class="mx-auto flex size-14 items-center justify-center rounded-full bg-lime/30">
                        <svg class="size-7 text-navy" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg>
                    </span>
                    <h2 class="mt-4 text-xl font-bold">Thanks, {{ $firstName }}. You've signed.</h2>
                    <p class="mt-1 text-sm text-slate-600">A signed copy is on its way to {{ $maskedEmail }}.
                        @if (count($document['signers']) > 1) Your installer signs next. @endif
                    </p>
                    @if ($inPerson)
                        <p class="mt-4 rounded-xl bg-mist p-3 text-sm font-semibold">Please hand the device back to {{ $document['sender'] }}.</p>
                    @endif
                </div>
                <div data-step="declined" class="mt-6 text-center" hidden>
                    <h2 class="text-xl font-bold">You've declined to sign</h2>
                    <p class="mt-1 text-sm text-slate-600">We've let {{ $document['sender'] }} know. Call (03) 8609 5195 if you change your mind.</p>
                </div>
            @endif
        </section>

        <footer class="mt-6 text-center text-xs leading-relaxed text-slate-500">
            Questions? Call <a href="tel:0386095195" class="font-semibold text-navy">(03) 8609 5195</a>.
            <a href="https://auzbright.com.au/privacy-policy/" class="underline">Privacy policy</a><br>
            Auzbright · Accredited energy upgrades in Victoria and New South Wales
        </footer>
    </main>

    <style>
        .btn-primary { display: block; width: 100%; padding: 0.875rem 1rem; border-radius: 999px; background: var(--color-lime); color: var(--color-navy); font-weight: 700; }
        .btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }
        .tab[aria-selected="true"] { background: #fff; box-shadow: 0 1px 2px rgb(14 25 63 / 0.1); }
        .tab[aria-selected="false"] { color: #64748b; }
        .step-dot.is-active span:first-child, .step-dot.is-done span:first-child { background: var(--color-navy); }
        .step-dot.is-active span:last-child { color: var(--color-navy); }
        .step-dot.is-done span:last-child { color: #64748b; }
    </style>
    <script>
        (() => {
            const steps = document.querySelectorAll('[data-step]');
            if (!steps.length) return;
            const dots = document.querySelectorAll('[data-step-dot]');
            const pad = document.querySelector('[data-pad]');

            const show = (step) => {
                steps.forEach((el) => { el.hidden = el.dataset.step !== String(step); });
                const n = { decline: 2, done: 4, declined: 4 }[step] ?? Number(step);
                dots.forEach((d) => {
                    const i = Number(d.dataset.stepDot);
                    d.classList.toggle('is-done', i < n);
                    d.classList.toggle('is-active', i === n);
                });
                if (String(step) === '3') sizePad();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            document.querySelectorAll('[data-next]').forEach((b) => b.addEventListener('click', () => show(b.dataset.next)));

            // Checkbox gates enable the step's Continue button.
            document.querySelectorAll('[data-gate]').forEach((box) => box.addEventListener('change', () => {
                document.querySelector(`[data-step="${box.dataset.gate}"] .btn-primary`).disabled = !box.checked;
            }));

            // One-time code: one digit per box, auto-advance, Continue when all six are filled.
            const otp = [...document.querySelectorAll('[data-otp] input')];
            otp.forEach((input, i) => {
                input.addEventListener('input', () => {
                    input.value = input.value.replace(/\D/g, '').slice(0, 1);
                    if (input.value && otp[i + 1]) otp[i + 1].focus();
                    document.querySelector('[data-step="1"] .btn-primary').disabled = otp.some((o) => !o.value);
                });
                input.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !input.value && otp[i - 1]) otp[i - 1].focus(); });
            });

            // Draw / Type tabs.
            document.querySelectorAll('[data-tab]').forEach((tab) => tab.addEventListener('click', () => {
                document.querySelectorAll('[data-tab]').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
                document.querySelectorAll('[data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
            }));
            const typed = document.getElementById('typed-name');
            typed?.addEventListener('input', () => { document.querySelector('[data-typed]').textContent = typed.value || ' '; });

            // Signature pad.
            let ctx, drawing = false;
            function sizePad() {
                if (!pad) return;
                const r = pad.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
                pad.width = r.width * dpr; pad.height = r.height * dpr;
                ctx = pad.getContext('2d'); ctx.scale(dpr, dpr);
                ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#0e193f';
            }
            const point = (e) => { const r = pad.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
            pad?.addEventListener('pointerdown', (e) => { drawing = true; pad.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.moveTo(...point(e)); });
            pad?.addEventListener('pointermove', (e) => { if (!drawing) return; ctx.lineTo(...point(e)); ctx.stroke(); });
            ['pointerup', 'pointercancel'].forEach((t) => pad?.addEventListener(t, () => { drawing = false; }));
            document.querySelector('[data-clear]')?.addEventListener('click', () => ctx?.clearRect(0, 0, pad.width, pad.height));

            show(1);
        })();
    </script>
</body>
</html>
