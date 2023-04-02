//import { Component } from "react";

import { ChangeEventHandler, ChangeEvent } from "react";
import "./search-box.styles.css";

// interface ISearchBoxProps extends IChangeHandlerProps {
//   placeholder: string;
//   className: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: any) => void;
// }

type SearchBoxProps = {
  className?: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  //onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}


const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxProps) => (
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


// const add: (a: number, b: number) => number = (a, b) => {
//   return a + b;
// }

// function add2(a: number, b: number): number {
//   return a + b;
// }

// const add3 = (a: number, b: number): number => {
//   return a + b;
// }

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type USAddress = {
//   street: string;
//   state: string;
// }

// type NorthAmericanAddress = CanadianAddress | USAddress;

// const addres: NorthAmericanAddress = {
//   street: "asdv",
//   // state: "asdas",
//   province: "sasdda"
// };
