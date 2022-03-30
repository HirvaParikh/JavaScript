import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 
class LifeCycle extends Component {
    constructor(props)
    {
        super(props);
        this.state = { Demo : "Welcome To this World" };
    }
 
    componentWillMount()
    {
        alert("componentWillMount() Called.");
        console.log("componentWillMount() Called.");
    }
 
    componentDidMount()
    {
        alert("componentDidMount() Called.");
        console.log("componentDidMount() Called.");
    }
 
    changeState()
    {
        this.setState({ Demo : "Money is Real Power." });
        console.log(this.state.Demo);
    }
 
    render()
    {
        return (
            <div>
            <h1>{ this.state.Demo }</h1>
            <h2>
                <a onClick={this.changeState.bind(this)}>Click Me To Change The State.</a>
            </h2>
            </div>);
    }
 
    shouldComponentUpdate(nextProps, nextState)
    {
        alert("shouldComponentUpdate() Called");
        console.log("shouldComponentUpdate() Called");
        return true;
    }
 
    componentWillUpdate()
    {
        alert("componentWillUpdate() Called.");
        console.log("componentWillUpdate() Called.");
    }
 
    componentDidUpdate()
    {
        alert("componentDidUpdate() Called");
        console.log("componentDidUpdate() Called.");
    }
}
 
ReactDOM.render(<LifeCycle />,document.getElementById('root'));
export default LifeCycle;
