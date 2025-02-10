<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Items extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'classification',
        'isSerial',
        'total',
    ];

    public function serial_numbers(): HasMany
    {
        return $this->hasMany(SerialNumberItem::class,'item_id','id');
    }
    public function available(): HasMany
    {
        return $this->hasMany(SerialNumberItem::class,'item_id','id')->where('status','=','available');
    }
    public function stock_items(): HasMany
    {
        return $this->hasMany(StockItem::class,'item_id','id');
    }
}
