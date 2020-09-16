import React from 'react';

class Book extends React.Component{
    constructor(props){
        super()
        console.log(props)
      }


    render(){
        return (
            <div>
                <p>{this.title}</p>
            </div>

        )
    }
}

export default Book;