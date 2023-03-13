import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";
import Pagination from "./Pagination";
import loder from "../../assets/Loading_icon.gif";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Pasta",
//     description: "Good Quality",
//     price: 10,
//   },
//   {
//     id: "m2",
//     name: "Pizza",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Burger",
//     description: "Fresh and Good",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Maggie",
//     description: "Healthy...and Testy...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = (props) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httperror, setHttpError] = useState();
  let [mealsList, setMeallist] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodapp-4b65d-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Somting Went wRONG");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.MealsLoading}>
        <img src={loder} />
      </section>
    );
  }

  if (httperror) {
    return (
      <section className={classes.MealsError}>
        <p>{httperror}</p>
      </section>
    );
  }
  mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  // setMeallist(mealsList);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = mealsList.slice(firstPostIndex, lastPostIndex);
  return (
    <section className={classes.meals}>
      <Card>
        <Pagination
          totalPosts={mealsList.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {/* <ul>{mealsList}</ul> */}
        <MealItem mealsList={currentPost} />
      </Card>
    </section>
  );
};

export default AvailableMeals;
