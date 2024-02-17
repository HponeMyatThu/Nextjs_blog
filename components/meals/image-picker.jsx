"use client";

import React, { useRef, useState } from "react";

import classes from "./css/image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const log = event.target;
    console.log("🚀 ~ handleImageChange ~ log:", log);

    const file = event.target.files[0];
    console.log("🚀 ~ handleImageChange ~ file:", file);

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      setPickImage(fileReader.result);
    };
    console.log(
      "🚀 ~ handleImageChange ~ fileReader.result:",
      fileReader.result
    );

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image picked by the user." className={`object-fit-cover`} fill/>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
