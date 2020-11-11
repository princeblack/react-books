import React from "react";
import Book from './Book';
import BookItems from './BookItems';

class Category extends React.Component {
  render() {
    const { display_name, list_image, books } = this.props.data;

    const booksList = books.map(el => (
        <BookItems data={el} key={el.book_uri}></BookItems>
    ));

    return (
      <div className="category">
          <div className="category-header">
            <p>{display_name}</p>
            <img src={list_image} alt={display_name}></img>
          </div>
          <div className="books-container" >{booksList}</div>
      </div>
    );
  }
}

export default Category;
