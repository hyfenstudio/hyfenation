<?php

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::create([
            'external_id'           => 'plan_H2wblPy045zeVP',
            'name'                  => 'Basic',
            'description'           => 'Basic features that are suitable for small teams and individuals',
            'price'                 => 5,
            'trial_days'            => 0,
            'max_projects'          => 100,
            'max_users_per_project' => 30,
            'disk_space'            => 5000,
            'status'                => Plan::STATUS_ACTIVE,
            'is_default'            => 0,
            'is_featured'           => 1,
        ]);

        Plan::create([
            'external_id'           => 'plan_H2wcmoBVYVgQJy',
            'name'                  => 'Premium',
            'description'           => 'Premium features that are suitable for large teams',
            'price'                 => 10,
            'trial_days'            => 0,
            'max_projects'          => null,
            'max_users_per_project' => null,
            'disk_space'            => null,
            'status'                => Plan::STATUS_ACTIVE,
            'is_default'            => 0,
            'is_featured'           => 0,
        ]);
    }
}
