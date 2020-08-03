<?php

namespace App\Models;

use App\Filters\Filterable;
use Illuminate\Support\Str;

class Task extends Model
{
    use Filterable;

    /**
     * Indicates low priority task.
     *
     * @var int
     */
    const PRIORITY_LOW = 1;

    /**
     * Indicates medium priority task.
     *
     * @var int
     */
    const PRIORITY_MEDIUM = 2;

    /**
     * Indicates high priority task.
     *
     * @var int
     */
    const PRIORITY_HIGH = 3;

    /**
     * Indicates urgent priority task.
     *
     * @var int
     */
    const PRIORITY_URGENT = 4;

    /**
     * The attributes that are mutable to dates.
     *
     * @var array
     */
    protected $dates = [
        'due_date', 'completed_at',
    ];

    /**
     * Bootstrap the model and its traits.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($task) {
            $task->uuid = Str::uuid();
        });
    }

    /**
     * The task belongs to a column.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function column()
    {
        return $this->belongsTo(Column::class);
    }

    /**
     * The task belongs to a user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The task has many sub-tasks.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    /**
     * The sub-task belongs to a major task.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    /**
     * The task has many comments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Filter main tasks only.
     *
     * @param $query
     */
    public function scopeMainTasks($query)
    {
        $query->whereNull('task_id');
    }

    /**
     * Filter sub-tasks only.
     *
     * @param $query
     */
    public function scopeSubTasks($query)
    {
        $query->whereNotNull('task_id');
    }

    /**
     * Filter completed tasks.
     *
     * @param $query
     */
    public function scopeCompleted($query)
    {
        $query->whereNotNull('completed_at');
    }

    /**
     * Filter incompleted tasks.
     *
     * @param $query
     */
    public function scopeIncomplete($query)
    {
        $query->whereNull('completed_at');
    }

    /**
     * Filter pending tasks.
     *
     * @param $query
     */
    public function scopePending($query)
    {
        $query->whereNull('completed_at');
    }

    /**
     * Determine if the task is completed or not.
     *
     * @return bool
     */
    public function isCompleted()
    {
        return $this->completed_at !== null;
    }

    /**
     * Mark the task as completed.
     *
     * @return void
     */
    public function markAsCompleted()
    {
        $this->update([
            'completed_at' => now()
        ]);
    }

    /**
     * Mark the task as incompleted.
     *
     * @return void
     */
    public function markAsIncompleted()
    {
        $this->update([
            'completed_at' => null,
        ]);
    }
}
