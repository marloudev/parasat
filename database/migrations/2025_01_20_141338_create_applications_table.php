<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->string('fname')->nullable();
            $table->string('lname')->nullable();
            $table->string('suffix')->nullable();
            $table->string('bdate')->nullable();
            $table->string('address')->nullable();
            $table->string('barangay')->nullable();
            $table->string('email')->nullable();
            $table->string('contact')->nullable();
            $table->string('plan_name')->nullable();
            $table->string('plan_speed')->nullable();
            $table->string('plan_price')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
