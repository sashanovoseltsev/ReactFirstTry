// import { Component } from "react";
import "./card.styles.css";

import { Monster } from '../../App';

type CardProps = {
  monster: Monster;
}

const Card = ({ monster: { name, email, id} }: CardProps) => (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2&size=150x150`} alt={name} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.person;
//     return (
//       <div className={`card-container ${this.props.className}`}>
//         <img
//           alt={name}
//           src={`https://robohash.org/${id}?set=set2&size=150x150`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
