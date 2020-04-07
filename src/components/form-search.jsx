import React, { Component } from 'react';

class Search extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default Search;


// handleChange(event) {
//   this.setState({ title: event.target.value });
// }

// render() {
//   return (
//     <input type="text" name="title" value={this.state.title}
//       onChange={this.handleChange.bind(this)}/>
//   );
// }
