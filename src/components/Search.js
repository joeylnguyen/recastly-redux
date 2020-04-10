import React from 'react';


var Search = ({handleSearchInputChange}) => (

  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={ (e) => (handleSearchInputChange(e.target.value))}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;


// handleInputChange(e) {
//   this.props.handleSearchInputChange(e.target.value);
//   this.setState({
//     value: e.target.value
//   });
// }