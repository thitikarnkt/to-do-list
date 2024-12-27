function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-blue-200">
      {/* พื้นหลัง */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-white/30 backdrop-blur-md">
        {/* กล่องข้อความ */}
        <div className="mx-3 flex w-96 flex-col justify-center gap-3 rounded-lg bg-white p-5 drop-shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 border-gray-300 border rounded-sm"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>

          <div className="text-start">
            <h1 className="text-lg font-semibold">To do list</h1>
            <p>Please enter a task name to do.</p>
          </div>

          <form className="flex flex-col gap-3">
            <input
              className="ease rounded-md border border-slate-200 bg-transparent px-3 py-2 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:shadow focus:outline-none"
              placeholder="New Task"
              type="text"
              id="task"
            />
            <div className="flex justify-end">
              <button className="rounded-md border bg-white p-2" type="submit">
                Add task +
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-3 flex flex-col items-end gap-y-3">
        <button className="items-end rounded-md bg-white px-4 py-3">
          Add task +
        </button>

        <div className="flex flex-col gap-3 rounded-xl bg-white p-10 drop-shadow-xl">
          <div className="flex gap-3">
            <div>
              <input type="checkbox" id="todo1" name="todo1" value="todo1" />
            </div>
            <label htmlFor="todo1">
              launch madbeku - to do list on producthunt 🚀
            </label>
          </div>
          <div className="flex gap-3">
            <div>
              <input
                type="checkbox"
                id="todo2"
                name="todo2"
                value="todo2"
              ></input>
            </div>
            <label htmlFor="todo2">schedule a zoom call with design team</label>
          </div>
          <div className="flex gap-3">
            <div>
              <input
                type="checkbox"
                id="todo3"
                name="todo3"
                value="todo3"
              ></input>
            </div>
            <label htmlFor="todo3">
              push latest plooto OCR visual to zeplin
            </label>
          </div>
          <div className="flex gap-3">
            <div>
              <input
                type="checkbox"
                id="todo4"
                name="todo4"
                value="todo4"
              ></input>
            </div>
            <label htmlFor="todo4">UI cards animation for website</label>
          </div>
          <div className="flex gap-3">
            <div>
              <input
                type="checkbox"
                id="todo5"
                name="todo5"
                value="todo5"
              ></input>
            </div>
            <label htmlFor="todo5">reply to emails</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
