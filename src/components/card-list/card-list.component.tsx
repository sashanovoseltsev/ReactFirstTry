//import { Component } from "react";

import "./card-list.styles.css";

import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((m) => {
      return <Card key={m.id} monster={m} />;
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
