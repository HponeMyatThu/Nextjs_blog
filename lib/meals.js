// import PrismaClient from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

import slugify from "slugify";
import xss from "xss";

export async function getMeals() {
  return prisma.meal.findMany();
}

export async function getMeal(slug) {
  try {
    const result = await prisma.meal.findUnique({
      where: {
        slug: slug,
      },
    });
    return result;
  } catch (error) {
    console.error("Error in getMeal:", error);
    return null; // or throw error if needed
  }
}


export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Assuming `meal.image` is a URL to the image file
  meal.image = `/images/${meal.slug}`;

  return prisma.meal.create({
    data: meal,
  });
}
