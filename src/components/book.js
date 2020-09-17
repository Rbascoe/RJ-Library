import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class Book extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.title,
            author: this.author,
            img: this.img,
            isRead: "false"
        }
      }


    clickHandler = () => {
        this.setState = {
            isRead: "true"
        }
    }
      
    render(){
        return (
                <div className="allbooks">
                    <h2> {this.props.title} </h2>
                    <h3> Author: {this.props.author} </h3>    
                    <Button name="isRead" onClick={this.clickHandler} >
                        Read
                    </Button>
                    <br></br>
                    <img className="image" src={this.img} alt="image" />
                    <br></br>
                </div>
        )
    }
}

