import React from 'react'

const priorityOrder = ['High', 'Medium', 'Low']

const DashboardOverview = ({
  tasks = [],
  inProgressTasks = [],
  doneTasks = [],
}) => {
  const allTasks = [...tasks, ...inProgressTasks, ...doneTasks]
  const totalTasks = allTasks.length
  const completionRate =
    totalTasks === 0 ? 0 : Math.round((doneTasks.length / totalTasks) * 100)
  const activeRate =
    totalTasks === 0
      ? 0
      : Math.round(((tasks.length + inProgressTasks.length) / totalTasks) * 100)

  const priorityCounts = priorityOrder.reduce((accumulator, priority) => {
    accumulator[priority] = allTasks.filter(
      (task) => task.priority === priority,
    ).length
    return accumulator
  }, {})

  const momentumRingStyle = {
    background: `conic-gradient(#22c55e ${completionRate}%, rgba(255,255,255,0.08) 0)`,
  }

  const stageCards = [
    {
      label: 'Backlog',
      count: tasks.length,
      tone: 'from-amber-400/30 to-amber-500/10 text-amber-100',
      bar: tasks.length,
    },
    {
      label: 'In Progress',
      count: inProgressTasks.length,
      tone: 'from-sky-400/30 to-sky-500/10 text-sky-100',
      bar: inProgressTasks.length,
    },
    {
      label: 'Done',
      count: doneTasks.length,
      tone: 'from-emerald-400/30 to-emerald-500/10 text-emerald-100',
      bar: doneTasks.length,
    },
  ]

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950 px-5 py-6 text-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] md:px-8">
      <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-lime-400/20 blur-3xl" />
      <div className="absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-lime-200">
              Live overview
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Kanban command center
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
                Track the flow from backlog to done, spot priority pressure, and
                see how much of your board is actually moving.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-4 lg:min-w-[28rem]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Total
              </p>
              <p className="mt-1 text-2xl font-black">{totalTasks}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Open
              </p>
              <p className="mt-1 text-2xl font-black">{tasks.length}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Moving
              </p>
              <p className="mt-1 text-2xl font-black">
                {inProgressTasks.length}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Done
              </p>
              <p className="mt-1 text-2xl font-black">{doneTasks.length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Momentum
                </p>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {completionRate}% complete
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                  {totalTasks === 0
                    ? 'Your board is waiting for the first task. Add one to start the flow.'
                    : `${doneTasks.length} tasks are finished, ${tasks.length} are still open, and ${inProgressTasks.length} are actively moving.`}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="relative flex h-28 w-28 items-center justify-center rounded-full"
                  style={momentumRingStyle}
                >
                  <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-slate-950 text-center">
                    <span className="text-2xl font-black leading-none">
                      {completionRate}%
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                      Done
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <p>
                    Active focus:{' '}
                    <span className="font-semibold text-white">
                      {activeRate}%
                    </span>
                  </p>
                  <p>
                    Healthy flow when tasks stay in motion instead of piling up.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stageCards.map((stage) => (
                <div
                  key={stage.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-300">
                        {stage.label}
                      </p>
                      <p className="mt-2 text-3xl font-black text-white">
                        {stage.count}
                      </p>
                    </div>
                    <div
                      className={`rounded-full bg-gradient-to-br ${stage.tone} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]`}
                    >
                      {stage.label}
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-lime-400"
                      style={{
                        width:
                          totalTasks === 0
                            ? '0%'
                            : `${Math.max((stage.bar / totalTasks) * 100, 8)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-lime-400/15 to-slate-900 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime-200/90">
                Priority load
              </p>
              <div className="mt-4 space-y-4">
                {priorityOrder.map((priority) => {
                  const percentage =
                    totalTasks === 0
                      ? 0
                      : Math.round(
                          (priorityCounts[priority] / totalTasks) * 100,
                        )

                  return (
                    <div key={priority}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-white">
                          {priority}
                        </span>
                        <span className="text-slate-300">
                          {priorityCounts[priority]} tasks
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${priority === 'High' ? 'bg-rose-400' : priority === 'Medium' ? 'bg-amber-300' : 'bg-emerald-400'}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Board insight
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Open pressure
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">
                    {tasks.length > inProgressTasks.length
                      ? 'Backlog heavy'
                      : 'Flowing well'}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Completion speed
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">
                    {doneTasks.length === 0 ? 'Starting up' : 'Moving'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardOverview
