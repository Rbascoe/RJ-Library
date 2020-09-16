import React from 'react';

import allBooks from './books.js';

import Book from './book.js';



class Library extends React.Component{

    constructor(){
        console.log(allBooks)
        super()

        this.state = {
          title: this.title,
          author: this.author,
          isRead: false
    
        }
      }


    render(){
        return (
            <div>
                <p>{allBooks.map(book => book.title)}</p>
                <Book title={this.state.title}/>
            </div>

        )
    }
}



export default Library;