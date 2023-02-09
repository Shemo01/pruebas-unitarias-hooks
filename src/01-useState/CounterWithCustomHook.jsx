import { useCounter } from '../hooks/useCounter';

const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button onClick={() => increment(2)} className="btn btn-success">+1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-danger">-1</button>
        </>
    )
}

export default CounterWithCustomHook
