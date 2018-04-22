import React from 'react';
import { Component } from 'react';

//Functions Component
// const SearchBar = () => {
//     return <input />
// };

//Class base Component
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    // render() {
    //     return <input onChange={this.onInputChange} />;
    // }

    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    //same as above 2
    render() {
        return (
            <div className="search-bar"> 
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.OnSearchTermChange(term);
    }
}

export default SearchBar;