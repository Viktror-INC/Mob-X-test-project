import React from "react";
import counter from '../store/counter'
import {observer} from "mobx-react-lite";

export const CounterClass = observer(() => {
    return (
        <div>
            <button onClick={() => counter.decrement()}>-</button>
            <span>Count: {counter.myTotal}</span>
            <button onClick={() => counter.increment()}>+</button>
        </div>
    );
});
