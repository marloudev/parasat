<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;
    protected $table = 'internet_plan';
    public $timestamps = false;
    protected $fillable = [
        'fname',
        'lname',
        'suffix',
        'bdate',
        'address',
        'barangay',
        'email',
        'contact',
        'plan_name',
        'plan_speed',
        'plan_price',
    ];
}
