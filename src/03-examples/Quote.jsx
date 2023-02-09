import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react"

const Quote = ({ quote, author }) => {

    const pref = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width , height } = pref.current.getBoundingClientRect();
        setBoxSize({width , height});
    }, [quote]);
    return (
        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}
            >
                <p ref={pref} className='mb-1'>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

export default Quote
