import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailablleMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;