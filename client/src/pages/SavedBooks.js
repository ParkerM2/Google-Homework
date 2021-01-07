import React, { Component } from "react";
import API from "../utils/API";
import { List } from "../components/List";
import Book from "../components/Book";

class SavedBooks extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
        console.log(this.state.books, "inside of componentdidmount")
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                console.log("response from API.getSavedBooks", res))
            .catch(err => console.log(err));
        console.log(this.state.books, "after API call get savedbooks")
    };

    handleDeleteBook = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    }

    render() {
        return (
            <div>
                <h1> React Google Book Search</h1>
                <h2> Saved Books : </h2>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <Book
                                key={book._id}
                                title={book.title}
                                subtitle={book.subtitle}
                                link={book.link}
                                authors={book.authors.join(", ")}
                                description={book.description}
                                image={book.image}
                                Button={() => (
                                    <button
                                        onClick={() => this.handleDeleteBook(book._id)}>
                                        Delete Book
                                    </button>
                                )}
                            />
                    ))}
                    </List>
                ) : (
                        <h3>No Saved books</h3>
                )}
            </div>
        )
    }
}

export default SavedBooks;