"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidInput(input) {
  return !input || input === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.image) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.includes("@")
  ) {
    return {
      message: "invalid input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
