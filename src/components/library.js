import React, { Component } from 'react'
import getBooks  from './books.js';
import Book from './book.js';


export default class Library extends React.Component {

    constructor(){
        super()
        this.state = {
          isRead: false
        }
      }
    
    renderAllBooks = () => {
        return getBooks.map(book => {
          return <Book title={book.title} 
                        author={book.author}
                        isRead={this.state.isRead}
                        image={book.image} />
        })
    }

    render() {
        return (
            <div>
               {this.renderAllBooks()}
            </div>
        )
    }
}

