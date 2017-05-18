/**
*
* SearchBox
*
*/

import React from 'react';
import searchStyle from 'components/SearchBox/search.css'
// import styled from 'styled-components';


class SearchBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  doSearch = e => {
        // debugger;
        console.log(e.target.value);
    }
    render(){
        return(
          <div style={searchStyle}>
            <input style={{"width":"65%", "marginLeft":"10%","paddingLeft":"1%", "backgroundColor": "lightgrey","borderRadius": "10px 0px 0px 10px"}} type="text" placeholder="Search for Songs, Artists, Playlists and more"  onChange={this.doSearch}/>
              <div style={{"width":"15%", "backgroundColor": "#ff4040", "textAlign":"center","borderRadius": "0px 10px 10px 0px"}}>Search</div>
          </div>
        );
    }
}

SearchBox.propTypes = {

};

export default SearchBox;
