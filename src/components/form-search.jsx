import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { title: "" };
  // }
  render() {
    return (
      <input type="text" className="form-control form-search" />
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
