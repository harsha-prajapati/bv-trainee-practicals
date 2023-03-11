import classes from "./User.module.css";
import { Component } from "react";
class User extends Component {
  render() {
    return <li className={classes.user}>{this.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
