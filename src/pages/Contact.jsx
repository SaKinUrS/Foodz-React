import React from "react";
import { useForm } from "react-hook-form";

import map from "../img/Map.png";
//
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(data);
    reset();
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__header header-block">
            <div className="header-block__title">Contact us</div>
            <div className="header-block__text">
              We love to here you anytime. You can reach us anytime via
              <span>Mailhere@Food.com</span>
            </div>
          </div>
          <form className="contact-form form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="form-item">
                <label className="form-label">
                  Name
                  <input
                    {...register("name", {
                      required: "Name is required field",
                      pattern: {
                        value: /^[a-z]+$/i,
                        message: "Only symbols",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum 20 symbols",
                      },
                      minLength: {
                        value: 3,
                        message: "Minimum 3 symbols",
                      },
                    })}
                    className="form-input"
                    placeholder="Your name"
                    type="text"
                    style={errors.name && { borderColor: "red" }}
                  />
                </label>
                {errors?.name && (
                  <div style={{ color: "red" }}>
                    <p>{errors?.name?.message || "Error!!!"}</p>
                  </div>
                )}
              </div>
              <div className="form-item">
                <label className="form-label">
                  Email
                  <input
                    {...register("email", {
                      required: "Email is required field",
                      minLength: {
                        value: 5,
                        message: "Minimum 5 symbols",
                      },
                    })}
                    type="email"
                    className="form-input"
                    placeholder="Example@example.com"
                    style={errors?.email?.message && { borderColor: "red" }}
                  />
                </label>
                {errors?.email && (
                  <div style={{ color: "red" }}>
                    <p>{errors?.email?.message || "Error!!!"}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="form-item">
              <label className="form-label">
                Phone Number
                <input
                  {...register("tel", {
                    required: "Tel is required field",
                    pattern: {
                      value: /^\d+$/,
                      message: "Only numbers",
                    },
                  })}
                  type="tel"
                  placeholder="(+84) 123 465 798 "
                  className="form-input"
                  style={errors?.tel?.message && { borderColor: "red" }}
                />
              </label>
              {errors?.tel && (
                <div style={{ color: "red" }}>
                  <p>{errors?.tel?.message || "Error!!!"}</p>
                </div>
              )}
            </div>
            <div className="form-item">
              <label className="form-label">
                Text lable
                <textarea
                  className="form-textarea"
                  placeholder="Text holder"
                  {...register("textarea", {
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]/g,
                    },
                    required: "Textarea field is required",
                  })}
                ></textarea>
              </label>
              {errors?.textarea && (
                <div style={{ color: "red" }}>
                  <p>{errors?.textarea?.message || "Error!!!"}</p>
                </div>
              )}
            </div>
            <button
              disabled={!isValid}
              type="submit"
              className="contact-form__button button"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="contact__map" id="map">
          <img src={map} alt="Map" />
        </div>
      </div>
    </section>
  );
}
