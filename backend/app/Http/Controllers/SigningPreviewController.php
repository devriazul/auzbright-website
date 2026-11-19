<?php

namespace App\Http\Controllers;

use App\Support\Demo;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

/**
 * Customer-facing signing page (UI preview).
 *
 * In the real module the link carries a signed, expiring token and the signing
 * itself runs through the provider adapter. Here it only renders sample data.
 */
class SigningPreviewController extends Controller
{
    public function __invoke(Request $request, string $reference): View
    {
        $document = Demo::document($reference) ?? abort(404);
        $deal = Demo::deal($document['related_to']);
        $contact = Demo::inquiries()->firstWhere('contact', $document['contact']);

        return view('sign.show', [
            'document' => $document,
            'deal' => $deal,
            'contact' => $contact,
            'inPerson' => $request->query('mode') === 'in-person',
            'maskedEmail' => preg_replace('/(?<=^.).+(?=@)/', '•••', $document['email']),
        ]);
    }
}
