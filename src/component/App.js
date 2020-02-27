import React from 'react';
import '../css/App.scss';
import HeaderComponent from './headerComponent';
import Category from './Category'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            catagory: []
        }
    }
    async componentDidMount(){
        const date = new Date().toISOString().split('T')[0];
        const api_key = process.env.REACT_APP_API_KEY;
        const url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=${api_key}`; 

        const response =  await fetch(url)
        const data = await response.json();
        this.setState({catagory: data.results.lists})

        console.log(data);
        console.log(this.state.catagory);
    }
    render(){
        const categoryItems = this.state.catagory.map(el =>{
            return <Category data={el} key={el.list_id}/>
        });
        return(
            <div className ="App">
                <HeaderComponent/>
                {categoryItems}
            </div>
        )
    }
}

export default App;