import React from "react";

const HookExample = () => {

    const [count, setCount] = React.useState(0);

    const clickHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={clickHandler}>Increment</button>
        </div>
    );
};

export default HookExample