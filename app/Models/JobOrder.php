<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class JobOrder extends Model
{
    protected $fillable = [
        'tech_id',
        'application_id',
        'job_type',
        'status'
    ];

    public function application(): HasOne
    {
        return $this->hasOne(Application::class,'id','application_id');
    }
}
