import { memo } from "react";

const Small = memo(({ value }) => {

    console.log('Me volvi a generar :(');
    return (
        <small>{value}</small>
    )
})

export default Small
