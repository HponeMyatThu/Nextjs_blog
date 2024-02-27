import React from "react";

import classes from "./page.module.css"
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Not found Meal</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
      <p className={classes.cta}>
        <Link href="/">Go home</Link>
      </p>
    </div>
  );
};

export default NotFound;
