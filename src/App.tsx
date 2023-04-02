//import { Component } from "react";

import { useState, useEffect, ChangeEvent } from "react";

import { getData } from "./utils/data.utils";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [titleText, setTitleText] = useState("Monsters Rolodex");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendered");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValueString = event.target.value.toLowerCase();
    setSearchField(searchValueString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitleText(event.target.value.toLowerCase());
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((monsters) => setMonsters(monsters));
    const fetchUsers = async () => { 
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
      // getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      //   .then(monsters => setMonsters(monsters));
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((m) => {
      return m.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">{titleText}</h1>
      <SearchBox
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
      />
      <br />
      <SearchBox placeholder="Title" onChangeHandler={onTitleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentWillUnmount() {
//     console.log("App will unmount");
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       )
//       .catch((_) => {
//         this.setState(() => {
//           return {
//             monsters: [
//               { id: "1", name: "Mikle Mikle", email: "mikle@gmail.com" },
//               { id: "2", name: "Sasha Sasha", email: "sasha@gmail.com" },
//               { id: "3", name: "Kolya Kolya", email: "kolya@gmail.com" },
//               { id: "4", name: "Dasha Dasha", email: "dasha@gmail.com" },
//               { id: "5 ", name: "Misha Misha", email: "misha@gmail.com" },
//             ],
//           };
//         });
//       });
//   }

//   // onSearchChange = (event) => {
//   //   const searchField = event.target.value.toLocaleLowerCase();
//   //   this.setState(() => {
//   //     return { searchField };
//   //   });
//   // };

//   // QUESTION: Why here this is undefined when function is called as callback in onChange event?
//   onSearchChange(event) {
//     console.log(this);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     var filteredMonsters = monsters.filter((m) => {
//       return m.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange.bind(this)}
//           placeholder="Search Monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello {this.state.name.firstName} {this.state.name.lastName}, I work
//           at {this.state.company}
//         </p>
//         <button
//           onClick={() => {
//             this.setState(
//               (state, props) => {
//                 console.log("prev stat: ", state);
//                 return {
//                   name: { firstName: "Sasha", lastName: "Nvsltsv" },
//                 };
//               },
//               () => {
//                 console.log("new stat: ", this.state);
//               }
//             );
//           }}
//         >
//           Change Name
//         </button>
//       </header>
//     </div>
//   );
// }

export default App;
