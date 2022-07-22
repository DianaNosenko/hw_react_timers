'use strict'
import React, { Component } from 'react'
import './TimerFromNull.css'

export default class TimerFromNull extends Component {
    constructor(props){
        super(props)
        this.state = {
            startValue: this.props.start,
            endValue: this.props.end
        }
        this.timerId = null;
        this.styleTimer = '';
    }
    next = () => {
        this.setState({startValue: this.state.startValue + 1});
    }
    start = () => {
         this.timerId = setInterval(this.next, 1000);
    }
    stop = () => {
        clearInterval(this.timerId);
        this.timerId = null;
    }
    //запуск счетчиков 
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop()
    }
    componentDidUpdate(){
        const {startValue, endValue} = this.state;
        if(startValue === endValue) {
          this.stop();
        };
      }
      
  render() {
    const {startValue, endValue} = this.state;
    return (
    <main>
        <h1 className={startValue === endValue?this.styleTimer='red': this.styleTimer='green'}>Timer 00:00:{startValue}</h1>
    </main>
    )
  }
}
