
 

import React, { Component } from 'react'



export default class Content4 extends Component {

    constructor(props){

        super(props);

        this.state={

            color:''

        }

    }



    componentDidMount(){

        console.log("Component successfully mounted ",this.state.color);



    }

    componentDidUpdate(){

        console.log("Component successfully updated ",this.state.color);

       

    }

    clickRedButton(){

        this.setState({

            color:'RED'

        })



    };
    clickBlueButton(){

        this.setState({

            color:'BLUE'

        })



    };



    render() {

        return (

            <div>

                <button onClick={()=>this.clickBlueButton()}>BLUE</button>

                <button onClick={()=>this.clickRedButton()}>RED</button>

            </div>

        )

    }

}