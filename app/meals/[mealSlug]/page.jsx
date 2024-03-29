import React from "react";

import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.description,
  };
}

const MealDetailPage = async ({ params }) => {
  const meal = await getMeal(params.mealSlug);
  console.log("🚀 ~ MealDetailPage ~ meal:", meal)

  if (!meal) {
    notFound();
  }

  meal.instructions = meal?.instructions?.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div>
          <Link href="/meals" className={classes.arrow}>
            &larr;
          </Link>
        </div>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;
