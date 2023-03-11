import classes from "./Counter.module.css";
import { useDispatch, useSelector, connect } from "react-redux";
import { Component } from "react";
import { counterActions } from "../store/index";
const Counter = () => {
  const dispach = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  // const toggleCounterHandler = () => {
  //   dispach({ type: "toggle" });
  // };

  // const incrementHandler = () => {
  //   dispach({ type: "increment" });
  // };

  // const decrementHandler = () => {
  //   dispach({ type: "decrement" });
  // };
  // const increseHandler = () => {
  //   dispach({ type: "increse", amount: 10 });
  // };

  const incrementHandler = () => {
    dispach(counterActions.increment());
  };

  const increseHandler = () => {
    dispach(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispach(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispach(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandler}>Increse By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispachToProps = (dispach) => {
//   return {
//     increment: () => dispach({ type: "increment" }),
//     decrement: () => dispach({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispachToProps)(Counter);
