import React from 'react';

import getBooks  from '../data/books.js';

import Book from './book.js';



class Library extends React.Component{

    constructor(){
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
                <Book title={this.state.title}/>
            </div>

        )
    }
}



export default Library;