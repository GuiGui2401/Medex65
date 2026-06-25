<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // Contact
            ['key' => 'phone1',   'value' => '+237 696 809 909',               'group' => 'contact'],
            ['key' => 'phone2',   'value' => '+237 696 534 179',               'group' => 'contact'],
            ['key' => 'email',    'value' => 'info@medex237.com',           'group' => 'contact'],
            ['key' => 'website',  'value' => 'www.medex237.com',            'group' => 'contact'],
            ['key' => 'address',  'value' => 'Cameroun - Bafoussam (Quartier Haoussa)', 'group' => 'contact'],
            ['key' => 'whatsapp', 'value' => '237696809909',                   'group' => 'contact'],

            // General
            ['key' => 'slogan',          'value' => 'Faites confiance au processus',   'group' => 'general'],
            ['key' => 'company_name',    'value' => 'Medex65 SARL',                 'group' => 'general'],
            ['key' => 'warranty_months', 'value' => '12',                              'group' => 'general'],
        ];

        foreach ($settings as $s) {
            Setting::firstOrCreate(['key' => $s['key']], $s);
        }

        $this->command->info('✅ Paramètres du site initialisés.');
    }
}
