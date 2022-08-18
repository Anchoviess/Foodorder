import classes from './MealsSummary.module.css';

const MealsSummary = () => {

    return (
<section className={classes.summary}>
      <h2>Delicious Food That i like to eat personally...</h2>
      <p>
        Choose my favorite meal from the broad selection of available meals
        and enjoy a delicious lunch or dinner from the comfort of your imagination.
      </p>
      <p>
        All my meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs. I am that chef.
      </p>
    </section>
    );
};

export default MealsSummary;