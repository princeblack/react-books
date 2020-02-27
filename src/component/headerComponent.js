import React, {useState, useEffect} from 'react';
import book from '../img/book.png'

class HeaderComponent extends React.Component {

    handleSubmit(e){
      console.log('hi');
      
    }
    render(){
        return (
            <div className="header">
                <div className="top-header">
                    <img src={book} alt="logo"></img>
                    <form className="form-input" onSubmit={this.handleSubmit}>
                        <label>
                            <input className="research" type="text"></input>
                        </label>
                        <label>
                            <input className="submit" type="submit" value="submit"></input>
                        </label>
                    </form>
                </div>
                <div className="header-link">
                    <a href="a">Books</a>
                    <a href="a">Movie</a>
                    <a href="a">Archive</a>
                    <a href="a">Article</a>
                </div>
            </div>
        )
    }


}

export default HeaderComponent;