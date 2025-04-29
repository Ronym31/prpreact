import React from 'react';
class Car extends React.Component {
    constructor(){
        super();
        console.log('Constructor Called')
        this.state = {
            name : "ABC",
            age : 32
        }
    }

    componentDidMount() {
        console.log("Mount Called")
    }
    render(){
        return(
            <div>
                <h1 >
                    This is a Class Component
                </h1>
                <p>The data as follows : {this.state.name} and {this.state.age}</p>
                <p>The props data : {this.props.name}</p>
            </div>
        )
    }
}

export default Car;