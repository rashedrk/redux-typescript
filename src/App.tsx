import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="flex border border-purple-200 rounded-md bg-slate-50 p-10">
      <button onClick={() => dispatch(incrementByValue(5))} className="me-4 px-2 py-3 bg-green-500 rounded-md text-white font-bold">Increment By 5</button>
      <button onClick={() => dispatch(increment())} className="px-2 py-3 bg-green-500 rounded-md text-white font-bold">Increment</button>
      <h1 className="mx-10 text-2xl">{count}</h1>
      <button onClick={() => dispatch(decrement())} className="px-2 py-3 bg-red-500 rounded-md text-white font-bold">Decrement</button>
    </div>
    </div>
  )
}

export default App
