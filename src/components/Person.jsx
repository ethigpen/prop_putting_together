import React, {Component} from 'react';

class Person extends Component{
// state variables go here
    constructor(props){
        super(props);
        this.state = {
            bdayAge: this.props.age
        }
    }

    render(){
    // put functions here
    const bdayCounter = ()=>{
        this.setState({bdayAge: this.state.bdayAge+1})
    }

        return(
            <div className="personInfo">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.bdayAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={bdayCounter}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}


export default Person;