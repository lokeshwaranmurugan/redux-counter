import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByInput } from "./CounterSlice";
import { AppDispatch, RootState } from "../../app/store";


const Counter = () => {
    const count = useSelector((state: RootState)=> state.counter.value)
    const isLoading = useSelector((state: RootState)=> state.counter.isLoading)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <h2> {isLoading ? "Loading..." : count} </h2>
            <button onClick={()=>dispatch(increment())}> ➕ </button>
            <button onClick={()=>dispatch(decrement())}> ➖ </button>
            <button onClick={()=>dispatch(incrementByInput(10))}> ➕ 10</button>
            <button onClick={()=>dispatch(incrementAsync(10))}> ➕ Wait a sec..</button>
        </div>
    );
}

export default Counter;