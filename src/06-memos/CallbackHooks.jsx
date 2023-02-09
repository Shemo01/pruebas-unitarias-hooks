import { useState } from "react";
import ShowIncrement from "./ShowIncrement";
import { useCallback } from "react";
import { useEffect } from "react";

const CallbackHooks = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );

    useEffect(() => {
        // incrementFather();
    }, [incrementFather]);

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // };

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}

export default CallbackHooks
