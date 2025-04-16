<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Notification extends Model
{
    //
    protected $fillable = [
        'application_id',
        'from',
        'status',
    ];

    public function application(): HasOne
    {
        return $this->hasOne(Application::class,'id','application_id');
    }
}
