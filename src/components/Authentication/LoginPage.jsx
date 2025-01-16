import React, { useRef, useState } from "react";
import "./LoginPage.css";

import { useForm } from "react-hook-form";

const LoginPage = () => {
  //   const nameRef = useRef(null);
  //   const phoneRef = useRef(null);

  const { register, handleSubmit } = useForm();

  //   const [user, setUser] = useState({
  //     name: "",
  //     phone: "",
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // const user = {
  //     //   name: "",
  //     //   phone: 0,
  //     // };

  //     // user.name = nameRef.current.value;
  //     // user.phone = parseInt(phoneRef.current.value);

  //     console.log(user);
  //   };

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
              //   ref={nameRef}
              //   value={user.name}
              //   onChange={(e) => setUser({ ...user, name: e.target.value })}
              {...register("name")}
              className="form_text_input"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              //   ref={phoneRef}
              //   value={user.phone}
              //   onChange={(e) =>
              //     setUser({ ...user, phone: parseInt(e.target.value) })
              //   }
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
