<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Application extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'fname',
        'mname',
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
        'smname',
        'slname',
        'ssuffix',
        'semail',
        'scontact',
        'status',
        'plan_name',
        'plan_speed',
        'plan_price',
    ];

    public function file_upload(): HasMany
    {
        return $this->hasMany(FileUpload::class, 'app_id', 'id');
    }
}
