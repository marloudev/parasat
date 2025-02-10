<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RequestItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'item_id',
        'amount',
        'status',
    ];
    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','user_id');
    }
    public function item(): HasOne
    {
        return $this->hasOne(Items::class,'id','item_id');
    }
}
