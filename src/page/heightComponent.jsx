import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/heightSlice";

export default function HeightComponent() {
    const height = useSelector((state) => state.height.value)
    const dispatch = useDispatch()
    return (
        <div>
            <p>HeightComponent</p>
            <button onClick={() => {
                dispatch(increment())
            }}>increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>decrement
            </button>
            <p>heightValue : {height}</p>
        </div>
    );
}