<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerialNumberItem extends Model
{
    use HasFactory;
    protected $fillable = [
       'item_id',
       'serial_number',
       'status',
    ];
}
