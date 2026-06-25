<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminSettingController extends Controller
{
    /**
     * GET /api/admin/settings
     */
    public function index(): JsonResponse
    {
        $settings = Setting::all()->groupBy('group')->map(fn ($g) => $g->pluck('value', 'key'));

        return response()->json(['data' => $settings]);
    }

    /**
     * PUT /api/admin/settings
     */
    public function update(Request $request): JsonResponse
    {
        $request->validate([
            'slogan'   => 'nullable|string|max:200',
            'phone1'   => 'nullable|string|max:20',
            'phone2'   => 'nullable|string|max:20',
            'email'    => 'nullable|email|max:100',
            'website'  => 'nullable|string|max:100',
            'address'  => 'nullable|string|max:300',
            'whatsapp' => 'nullable|string|max:20',
        ]);

        $contactKeys = ['phone1', 'phone2', 'email', 'website', 'address', 'whatsapp'];
        $generalKeys = ['slogan'];

        foreach ($contactKeys as $key) {
            if ($request->filled($key)) {
                Setting::set($key, $request->$key, 'contact');
            }
        }
        foreach ($generalKeys as $key) {
            if ($request->filled($key)) {
                Setting::set($key, $request->$key, 'general');
            }
        }

        return response()->json([
            'message' => 'Paramètres mis à jour avec succès.',
            'data'    => Setting::getGroup('contact') + Setting::getGroup('general'),
        ]);
    }
}
