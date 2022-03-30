import React, {Component} from 'react'

class GrandParent extends Component{
    render(){
        return(
            <>
                <h2>Grand Parent Load.</h2>
                <Parent render={mouse=>(<Child mouse={mouse}/>)}/>
            </>
        )
    }
}
class Parent extends Component{
    constructor(props){
        super(props)
        this.handleMouseMove=this.handleMouseMove.bind(this);
        this.state={
            x:0,
            y:0
        }
    }

    handleMouseMove(event){
        this.setState({
            x:event.clientX,
            y:event.clientY,
        })
    }    

    render(){
        return(
            <div style={{height:"200px",width:"200px",backgroundColor:"blue"}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}
class Child extends React.Component{
    
    render(){
        return(
            <>
            <h2>{this.props.mouse.x} - {this.props.mouse.y}</h2>
            <img src={process.env.PUBLIC_URL + '/sky9.png'} alt="Sky9" style={{ position: 'absolute', left: this.props.mouse.x, top: this.props.mouse.y }}/>
            </>
        )
    }
}

export default GrandParent;