<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobOrder extends Model
{
    protected $fillable = [
        'tech_id',
        'application_id',
        'job_type',
        'status'
    ];
}
