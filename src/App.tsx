import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border border-purple-200 rounded-md bg-slate-50 p-10">
      <button onClick={() => dispatch(increment())} className="px-2 py-3 bg-green-500 rounded-md text-white font-bold">Increment</button>
      <h1 className="mx-10 text-2xl">{count}</h1>
      <button onClick={() => dispatch(decrement())} className="px-2 py-3 bg-red-500 rounded-md text-white font-bold">Decrement</button>
    </div>
    </div>
  )
}

export default App
