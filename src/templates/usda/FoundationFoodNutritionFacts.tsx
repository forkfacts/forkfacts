import * as React from "react";
import {
  FoundationOrSrFood,
  NutrientRdi,
  RDI,
  PageSeo,
} from "../../shared/types";
import { generateRdiForFood } from "../../shared/functions";
import { NutritionFactTable } from "../../components/NutritionFactTable";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

export default ({ pageContext }) => {
  const { food, rdis, breadcrumbs, seo } = pageContext;
  const thisFood = food as FoundationOrSrFood;
  const allRdis = rdis as RDI[];
  const nutrientRdis: NutrientRdi[] = generateRdiForFood(thisFood, allRdis);
  const pageSeo = seo as PageSeo;

  return (
    <>
      <SEO
        description={pageSeo.metaDesc}
        slug={pageSeo.slug}
        title={pageSeo.title}
      />
      <Layout pageTitle={food.name} breadcrumbs={breadcrumbs}>
        <NutritionFactTable food={thisFood} nutrientRdis={nutrientRdis} />
      </Layout>
    </>
  );
};
