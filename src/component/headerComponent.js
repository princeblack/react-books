import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import book from '../img/book.png'

class HeaderComponent extends React.Component {

    handleSubmit(e){      
    }
    render(){
        return (
            <div className="header">
                <div className="top-header">
                    <img src={book} alt="logo"></img>
                    {/* <form className="form-input" onSubmit={this.handleSubmit}>
                        <label>
                            <input className="research" type="text"></input>
                        </label>
                        <label>
                            <input className="submit" type="submit" value="submit"></input>
                        </label>
                    </form> */}
                </div>
                <div className="header-link">
                    <NavLink to="/">Books</NavLink>
                    <NavLink to="/movie">Movie</NavLink>
                    {/* <NavLink to="/archive">Archive</NavLink>
                    <NavLink to="/article">Article</NavLink> */}
                </div>
            </div>
        )
    }


}

export default HeaderComponent;