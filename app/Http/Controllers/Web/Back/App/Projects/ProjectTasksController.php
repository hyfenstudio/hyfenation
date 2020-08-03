<?php

namespace App\Http\Controllers\Web\Back\App\Projects;

use App\Http\Controllers\Controller;
use App\Models\Column;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class ProjectTasksController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('tenant.user');
        $this->middleware('plan.limit')->only('store', 'update');
    }

    /**
     * Store a newly created task.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'content' => 'required',
        ]);

        $column = Column::where('uuid', $request->column)->firstOrFail();

        $this->authorize('create', [Task::class, $column->project]);

        $column->tasks()->create([
            'content' => $request->input('content'),
            'index'   => $column->tasks->count(),
        ]);

        return back();
    }

    /**
     * Update the specified task.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'content' => 'required',
        ]);

        $task = Task::where('uuid', $request->task)->firstOrFail();

        $this->authorize('update', $task);

        $task->update([
            'content'  => $request->input('content'),
            'due_date' => $request->input('due_date'),
            'priority' => $request->input('priority'),
        ]);

        if ($request->input('user_uuid')) {
            $task->update([
                'user_id' => User::where('uuid', $request->input('user_uuid'))->firstOrFail()->id
            ]);
        } else {
            $task->update([
                'user_id' => null
            ]);
        }

        if ($request->input('is_completed')) {
            $task->markAsCompleted();
        } else {
            $task->markAsIncompleted();
        }

        return back();
    }

    /**
     * Delete the specified task.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Request $request)
    {
        $task = Task::where('uuid', $request->task)->firstOrFail();

        $this->authorize('delete', $task);

        $task->delete();

        return back();
    }
}
