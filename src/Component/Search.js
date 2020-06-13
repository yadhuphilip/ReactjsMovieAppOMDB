import React from 'react';

function Search(props) {

    return(
        <section className="search-input">
            <input
            type="Text"
            placeholder="cilma peru "
            onChange = {props.handleinput}
            onKeyPress = {props.searchinput}
            />
        </section>
    );

}

export default Search;