<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FileUpload extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'app_id',
        'file_name',
        'image',
    ];

    public function application(): BelongsTo
    {
        return $this->belongsTo(Application::class, 'app_id', 'id');
    }
}
