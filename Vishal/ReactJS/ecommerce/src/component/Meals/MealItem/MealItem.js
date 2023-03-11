import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
// const MealItem = (props) => {
//   // price = `$${price.toFixed(2)}`;
//   console.log(props);
//   return (
//     <li className={classes.meal}>
//       <div>
//         <h3>{props.mealsList[0].props.name}</h3>
//         <div className={classes.description}>
//           {props.mealsList[0].props.description}
//         </div>
//         <div className={classes.price}>{props.mealsList[0].props.price}</div>
//       </div>
//       <div>
//         <MealItemForm />
//       </div>
//     </li>
//   );
// };

const MealItem = ({ props, mealsList }) => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {mealsList.map((data, index) => {
        console.log(data);
        const addItemToCartHandler = (amount) => {
          console.log(props);
          cartCtx.addItem({
            id: data.props.id,
            name: data.props.name,
            amount: amount,
            price: data.props.price,
          });
        };
        const priceconvert = `$${data.props.price.toFixed(2)}`;
        console.log(data);
        return (
          <li className={classes.meal}>
            <div>
              <h3>{data.props.name}</h3>
              <div className={classes.description}>
                {data.props.description}
              </div>
              <div className={classes.price}>{priceconvert}</div>
            </div>
            <div>
              <MealItemForm onAddToCart={addItemToCartHandler} />
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default MealItem;
