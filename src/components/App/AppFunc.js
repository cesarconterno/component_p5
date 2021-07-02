import React, { useEffect } from 'react';
import p5 from 'p5'
import { Sketch } from './easing.p5'
import './App.css';


export const AppFunc = () => {
    const myRef = React.createRef()


    useEffect(() => {
        const myP5 = new p5(Sketch, myRef.current)
        return myP5
    },[])

    return (
        <div
            ref={myRef}>
        </div>
    )
}