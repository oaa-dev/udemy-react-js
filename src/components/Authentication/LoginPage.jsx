import React, { useRef, useState } from "react";
import "./LoginPage.css";

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true, minLength: 3 })}
              className="form_text_input"
              placeholder="Enter Your Name"
            />
            {errors.name?.type === "required" && (
              <em className="form_error">Please enter your name</em>
            )}

            {errors.name?.type === "minLength" && (
              <em className="form_error">
                Name Should be 3 or more characters
              </em>
            )}
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              {...register("phone", { valueAsNumber: true })}
              className="form_text_input"
              placeholder="Enter Your Phone number"
            />
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
