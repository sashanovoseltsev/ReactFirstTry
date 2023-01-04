//import { Component } from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((m) => {
      return <Card key={m.id} person={m} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters, className } = this.props;
//     return (
//       <div className={`card-list ${className}`}>
//         {monsters.map((m) => {
//           return <Card key={m.id} person={m} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
