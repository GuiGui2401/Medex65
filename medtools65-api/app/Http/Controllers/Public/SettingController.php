<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;

class SettingController extends Controller
{
    /**
     * GET /api/v1/settings
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => Setting::getGroup('contact') + Setting::getGroup('general'),
        ]);
    }
}
