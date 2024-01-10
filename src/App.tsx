
function App() {

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border border-purple-200 rounded-md bg-slate-50 p-10">
      <button className="px-2 py-3 bg-green-500 rounded-md text-white font-bold">Increment</button>
      <h1 className="mx-10 text-2xl">0</h1>
      <button className="px-2 py-3 bg-red-500 rounded-md text-white font-bold">Decrement</button>
    </div>
    </div>
  )
}

export default App
