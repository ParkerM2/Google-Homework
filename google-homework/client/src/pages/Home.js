import React, {Component} from "react";
import API from "../utils/API";
import {List} from "../components/List";
import Form from "../components/Form";

class Home extends Component {
    state = {
      books: [],
      q: "",
      message: "Search For A Book To Begin!"
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    getBooks = () => {
      API.getBooks(this.state.q)
        .then(res =>
          this.setState({
            books: res.data
          })
        )
        .catch(() =>
          this.setState({
            books: [],
            message: "No New Books Found, Try a Different Query"
          })
        );
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.getBooks();
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