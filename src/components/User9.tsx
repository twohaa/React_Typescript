import React, { useReducer } from "react";

//typing useReducerHook
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREASE = "INCREASE"

type stateType = {
    count: number;
};
type IncrementActionType = { type: typeof INCREMENT }
type DecrementActionType = { type: typeof DECREMENT }
type ResetActionType = { type: typeof RESET }
type IncreaseActionType = { type: typeof INCREASE, payload: number }
type CounterActionType = IncrementActionType | DecrementActionType | ResetActionType | IncreaseActionType

const initialState = {
    count: 0
}

const reducer = (state: stateType, action: CounterActionType) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case RESET:
            return {
                count: 0
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case INCREASE:
            return {
                count: state.count + action.payload
            }
        default:
            throw new Error();
    }
}

const User = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2 style={{ border: "1px solid black" }}>User Mangement 9</h2>
            <h3>Count : {state.count}</h3>
            <button onClick={() => { dispatch({ type: INCREMENT }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: DECREMENT }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: RESET }) }}>Reset</button>
            <button onClick={() => { dispatch({ type: INCREASE, payload: 10 }) }}>InrementByAmount</button>
            <br />
            <hr />
        </div>
    );
};

export default User;