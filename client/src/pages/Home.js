import React, {Component} from "react";
import API from "../utils/API";
import {List} from "../components/List";
import Form from "../components/Form";
import Book from "../components/Book";
import axios from "axios";

class Home extends Component {
    state = {
      books: [],
      q: "",
      message: "Search For A Book To Begin!"
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      console.log(this.state)
      this.setState({
        [name]: value
      });
  };
   getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data.description
        }),
        console.log(res)
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  
    // getBooks = (q) => {
    //    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q)
    //     .then(results =>
    //     results.data.items.filter(
    //       result =>
    //         result.volumeInfo.title &&
    //         result.volumeInfo.infoLink &&
    //         result.volumeInfo.authors &&
    //         result.volumeInfo.description &&
    //         result.volumeInfo.imageLinks &&
    //         result.volumeInfo.imageLinks.thumbnail
    //     )
    //   )
    //   .then(apiBooks =>
    //     this.setState({
    //       books : apiBooks
    //     })
    //  )
    //     .catch(() =>
    //       this.setState({
    //         books: [],
    //         message: "No New Books Found, Try a Different Query"
    //       })
    //     )
    // };
  
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(event)
      this.getBooks(this.state.q);
    };
  
    handleBookSave = id => {
      const book = this.state.books.find(book => book.id === id);
  
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
      }).then(() => this.getBooks());
      console.log(book.volumeInfo.description, "after API.saveBook")
    };
    render() {
        return(
            <div>
            <h1> Google Books Search </h1>
            <h2> Search for and Save Books</h2>
            
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
                />
            {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>) : (
                    <h2> {this.state.message}</h2>
                )}
        </div>
        )
    }
}

export default Home;