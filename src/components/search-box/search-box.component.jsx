//import { Component } from "react";

import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    type="search"
    onChange={onChangeHandler}
    placeholder={placeholder}
    className={`search-box ${className}`}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         type="search"
//         onChange={this.props.onChangeHandler}
//         placeholder={this.props.placeholder}
//         className={`search-box ${this.props.className}`}
//       />
//     );
//   }
// }

export default SearchBox;
