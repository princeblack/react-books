import React from "react";

const MoviesItemes = (props) => {
  const  handleClick = (url) => {
    window.open(url, "_blank");
  };
  const data = props.data
  console.log(data);
  return (
    <div className="book">
      <div className="left">
        <div className="img">
          <img className="movieImage" src={data.multimedia.src} alt={data.headline}></img>
        </div>
        <div className="publisher">
          <small>{data.display_title}</small>
        </div>
      </div>
      <div className="right">
        <p className="title">{data.headline}</p>
        <p className="author">{data.byline}</p>
        <p className="desc">{data.summary_short}</p>
        <div className="actions">
          <button onClick={() => handleClick(data.link.url)}>
            REVIEW
          </button>
          {/* {sunday_review_link.length > 0 && (
            <button onClick={() => handleClick(sunday_review_link)}>
              REVIEW
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MoviesItemes;
