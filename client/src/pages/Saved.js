import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-8" offset="md-2">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
            </Jumbotron>
                {this.state.books.length ? (
                    <List>
                    {this.state.books.map(book => (
                        <ListItem key={book._id}>
                          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                          <div className="containerOfThings align-items-center d-inline-flex">
                            <div className="card img-holder d-inline-flex p-2 w-25 h-100 img-thumbnail">
                              <img src={book.image} className="img-fluid d-inline-block"/>
                            </div>
                            <div className="ml-3">
                              <a href={book.link}>
                                <strong>
                                {book.title} by {book.author}
                                </strong>
                              </a>
                            </div>
                          </div>
                          <p className="mt-2">{book.description}</p>
                        </ListItem>
                    ))}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
