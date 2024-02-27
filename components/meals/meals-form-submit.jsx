"use client";

import { useFormStatus } from "react-dom";
import React from "react";

const MealFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealFormSubmit;
