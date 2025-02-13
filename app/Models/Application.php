<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'fname',
        'lname',
        'suffix',
        'bdate',
        'region',
        'province',
        'city',
        'barangay',
        'lot',
        'email',
        'contact',
        'sfname',
        'slname',
        'ssuffix',
        'semail',
        'scontact',
        'plan_name',
        'plan_speed',
        'plan_price',
    ];
}
