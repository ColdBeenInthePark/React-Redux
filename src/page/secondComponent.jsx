import React from "react";
import {decrement, increment} from "../store/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import HeightComponent from "./heightComponent";
export default function SecondComponent() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <p>SecondComponent</p>
            <button onClick={() => {
                dispatch(increment())
            }}>increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>decrement
            </button>
            <p>countValue : {count}</p>
            <HeightComponent/>
        </div>
    );
}