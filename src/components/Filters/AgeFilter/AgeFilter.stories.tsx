import { AgeFilter } from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Filters/AgeFilter",
  component: AgeFilter,
};

export const Infants0To6Months = () => (
  <AgeFilter
    startAge={0}
    endAge={6}
    ageUnit={"month"}
    onClick={action("Age Selector Clicked")}
  />
);

export const Infants6MonthsTo12Months = () => (
  <AgeFilter
    startAge={6}
    endAge={12}
    ageUnit={"month"}
    onClick={action("Age Selector Clicked")}
  />
);

export const Adult31To50Year = () => (
  <AgeFilter
    startAge={31}
    endAge={50}
    ageUnit={"year"}
    onClick={action("Age Selector Clicked")}
  />
);

export const Seniors = () => (
  <AgeFilter
    startAge={70}
    ageUnit={"year"}
    onClick={action("Age Selector Clicked")}
  />
);
