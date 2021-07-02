import React from 'react'
import p5 from 'p5'
import { Sketch } from './easing.p5'
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        this.myP5 = new p5(Sketch, this.myRef.current)
    }

    render() {
        return (
            <div
                ref={this.myRef}>
            </div>
        )
    }
}
