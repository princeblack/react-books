import React from 'react'

const BookItems = (props) => {
     const {
      author,
      book_image,
      description,
      title,
      amazon_product_url,
      publisher,
      sunday_review_link,
    } = props.data;
   const  handleClick = (url) => {
        window.open(url, "_blank");
      };

    return (
        <div className="book">
             <div className="left">
                <div className="img">
                  <img src={book_image} alt={title}></img>
                </div>
                <div className="publisher">
                  <small>{publisher}</small>
                </div>
              </div>
              <div className="right">
                <p className="title">{title}</p>
                <p className="author">{author}</p>
                <p className="desc">{description}</p>
                <div className="actions">
                  <button onClick={() => handleClick(amazon_product_url)}>
                    AMAZON
                  </button>
                  {sunday_review_link.length > 0 && (
                    <button onClick={() => handleClick(sunday_review_link)}>
                      REVIEW
                    </button>
                  )}
                </div>
              </div>
        </div>
    )
}

export default BookItems
