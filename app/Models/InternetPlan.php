<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternetPlan extends Model
{
    use HasFactory;
    protected $table = 'internet_plan';
    public $timestamps = false;
    protected $fillable = [
        'name',
        'speed',
        'price',
        'popular'
    ];
}
