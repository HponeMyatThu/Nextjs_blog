import Link from "next/link";
import React from "react";

import classes from './meals/[mealSlug]/page.module.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <p className={classes.cta}>
        <Link href="/">Go home</Link>
      </p>
    </div>
  );
};

export default NotFound;
