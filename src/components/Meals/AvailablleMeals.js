import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Bellpepper, Pepperoni, Mushrooms",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chilli Cheese Fries",
    description: "Extra cheese light chilli-the only way",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Zankou Chicken",
    description: "Get the shwarma or the chicken kebabs extra hummus dude",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
