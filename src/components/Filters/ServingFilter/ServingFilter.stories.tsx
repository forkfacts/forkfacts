import { ServingFilter } from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Filters/ServingFilter",
  component: ServingFilter,
};

export const OneTablespoon = () => (
  <ServingFilter
    amount={1}
    unit={"tablespoon"}
    onClick={action("Serving Selector Clicked")}
  />
);

export const OneHundredMG = () => (
  <ServingFilter
    amount={100}
    unit={"mg"}
    onClick={action("Serving Selector Clicked")}
  />
);

export const ThirteenPointSixGrams = () => (
  <ServingFilter
    amount={13.6}
    unit={"g"}
    onClick={action("Serving Selector Clicked")}
  />
);
