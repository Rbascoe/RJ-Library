import React from 'react';

class Book extends React.Component{
    constructor(props){
        super()
        console.log(props)
      }

      
    render(){
        return (
            <div>
                <p>{this.props.title}</p>
            </div>

        )
    }
}

export default Book;