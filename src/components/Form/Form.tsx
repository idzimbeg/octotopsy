import React, { useState } from "react";

import "./Form.css";

export type FormProps = {
  onSubmit?: () => {};
  onClick?: (a: number) => {};
  typing?: boolean;
  step?: number;
  value?: string | number;
  label?: string;
};

const useForm = (props: FormProps) => {
  const { typing, step, value } = props;
  const [form, setForm] = useState<FormProps>({
    typing: false,
    step: 0,
    value: "",
  });

  const handleChange = (e: any) => {
    if (value !== "") {
      setForm({ ...form, typing: true, value: e.target.value });
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const stepCount = step ?? step! + 1;
    setForm({ typing: false, step: stepCount, value: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setForm(form);
  };
  return {
    form,
    handleChange,
    handleClick,
    handleSubmit,
    setForm,
    step,
    value,
    typing,
  };
};

const Form = (props: FormProps) => {
  const {
    handleClick,
    handleChange,
    handleSubmit,
    form,
    setForm,
    step,
    typing,
    value,
  } = useForm(props);

  if (step! > 3) {
    setForm({ typing: false, step: 0, value: value });
  }
  return (
    <div className="registration-form">
      <header>
        <h1>Sign Up</h1>
        <p>Fill in all information's</p>
      </header>
      <form>
        <div className="input-section ">
          <input
            type="email"
            placeholder="ENTER YOUR E-MAIL HERE"
            autoComplete="off"
            className="email"
            onChange={handleChange}
          ></input>
          <div className="animated-button">
            {!!typing ? (
              <span className="next-button" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    stroke: "rgb(255, 1, 60, 0.8)",
                    boxShadow:
                      "rgb(255, 1, 60, 0.8) -5px 5px, rgb(255, 1, 60, 0.4) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.1) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                  }}
                >
                  <path d="M7.35351 13.5696C7.0531 13.2692 7.0531 12.7821 7.35351 12.4817L10.7308 9.10439C11.4318 8.40344 12.5682 8.40345 13.2692 9.10439L16.6465 12.4817C16.9469 12.7821 16.9469 13.2692 16.6465 13.5696C16.3461 13.87 15.859 13.87 15.5586 13.5696L12.1813 10.1922C12.0812 10.0921 11.9188 10.0921 11.8187 10.1922L8.44136 13.5696C8.14096 13.87 7.65391 13.87 7.35351 13.5696Z" />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 408.75 408.75"
                  xmlSpace="preserve"
                  style={{
                    fill: "transparent",
                    stroke: "rgb(255, 1, 60, 0.8) ",
                    boxShadow:
                      "rgb(0, 230, 246, 0.8) -5px 5px, rgb(255, 1, 60, 0.8) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.2) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                  }}
                >
                  <g>
                    <polygon points="82.304,127.759 82.304,280.991 82.31,280.991 326.437,280.995 326.448,280.995    326.448,127.755  " />
                    <polyline points="326.439,280.991 82.31,280.991 154.878,207.549 158.008,204.382 204.371,251.301    250.735,204.375 250.74,204.382 253.863,207.542 326.439,280.991  " />
                    <polyline points="326.448,127.755 326.448,127.755 250.738,204.375 250.738,204.38 250.74,204.382    253.863,207.542 258,211.729 326.448,140.144 326.448,127.755  " />
                    <polyline points="107.987,153.753 107.987,153.905 157.936,204.455 158.008,204.382 107.987,153.753  " />
                    <polyline points="250.735,204.375 205.198,250.465 175.754,222.341 159.002,203.394 159.002,203.394    185.377,230.019 212.001,258.432 264.512,218.518 257.888,211.847 258,211.729 253.863,207.542 250.74,204.382 250.738,204.38    250.735,204.375  " />
                    <polyline points="326.444,127.759 250.735,204.375 204.371,251.301 158.008,204.382 82.304,127.759    326.444,127.759  " />
                  </g>
                </svg>
              </span>
            )}
          </div>
        </div>
        {step === 1 && (
          <div className="input-section folded">
            <input
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
              className="password"
              onChange={handleChange}
            ></input>
            <div className="animated-button">
              {!!typing ? (
                <span className="next-button" onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      background: "transparent",
                      stroke: "rgb(255, 1, 60, 0.8)",
                      boxShadow:
                        "rgb(0, 230, 246, 0.8) -5px 5px, rgb(255, 1, 60, 0.8) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.2) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                    }}
                  >
                    <path d="M7.35351 13.5696C7.0531 13.2692 7.0531 12.7821 7.35351 12.4817L10.7308 9.10439C11.4318 8.40344 12.5682 8.40345 13.2692 9.10439L16.6465 12.4817C16.9469 12.7821 16.9469 13.2692 16.6465 13.5696C16.3461 13.87 15.859 13.87 15.5586 13.5696L12.1813 10.1922C12.0812 10.0921 11.9188 10.0921 11.8187 10.1922L8.44136 13.5696C8.14096 13.87 7.65391 13.87 7.35351 13.5696Z" />
                  </svg>
                </span>
              ) : (
                <span className="icon-paper-plane">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width="65px"
                    height="65px"
                    viewBox="0 0 47 50"
                    xmlSpace="preserve"
                    style={{
                      fill: "transparent",
                      stroke: "rgb(255, 1, 60, 0.8)",
                      boxShadow:
                        "rgb(0, 230, 246, 0.8) -5px 5px, rgb(255, 1, 60, 0.8) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.2) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                    }}
                  >
                    <path d="M37.076,19.748c-0.824,0-1.494,0.672-1.494,1.499v1.46h2.991v-1.46C38.573,20.42,37.9,19.748,37.076,19.748z" />
                    <path d="M41.227,12.635H5.773C2.6,12.635,0,15.237,0,18.41v10.18c0,3.178,2.6,5.775,5.773,5.775h35.454    C44.4,34.365,47,31.768,47,28.59V18.41C47,15.237,44.4,12.635,41.227,12.635z M12.56,25.077l1.385,1.508l-2.399,1.8l-0.984-1.8    c-0.145-0.257-0.372-0.761-0.691-1.508c-0.349,0.821-0.581,1.321-0.696,1.508l-0.998,1.8l-2.466-1.8l1.491-1.508    c0.42-0.415,0.827-0.771,1.229-1.063c-0.41-0.037-0.949-0.113-1.614-0.238l-2.065-0.336l0.958-2.812l1.852,0.842    c0.195,0.088,0.68,0.365,1.452,0.824c-0.165-0.747-0.271-1.302-0.319-1.666l-0.263-2.013h2.941l-0.238,2.013    c-0.052,0.49-0.166,1.045-0.335,1.666c0.339-0.17,0.563-0.283,0.669-0.345c0.372-0.207,0.659-0.35,0.852-0.442l1.853-0.879    l0.918,2.812l-2.049,0.428c-0.375,0.072-0.931,0.119-1.67,0.146C11.874,24.406,12.266,24.758,12.56,25.077z M26.137,25.077    l1.387,1.508l-2.399,1.799l-0.983-1.799c-0.145-0.257-0.372-0.761-0.69-1.508c-0.35,0.821-0.58,1.321-0.695,1.508l-1,1.799    l-2.465-1.799l1.491-1.508c0.42-0.415,0.826-0.771,1.229-1.063c-0.408-0.037-0.949-0.113-1.614-0.238l-2.066-0.336l0.959-2.812    l1.853,0.842c0.193,0.088,0.68,0.365,1.451,0.824c-0.169-0.747-0.275-1.302-0.32-1.666l-0.264-2.011h2.942l-0.239,2.011    c-0.054,0.49-0.166,1.045-0.333,1.666c0.337-0.17,0.561-0.283,0.668-0.345c0.37-0.207,0.658-0.35,0.852-0.442l1.854-0.879    l0.919,2.812l-2.051,0.428c-0.375,0.072-0.929,0.119-1.669,0.146C25.451,24.406,25.844,24.758,26.137,25.077z M41.35,27.625    c0,0.619-0.507,1.125-1.125,1.125H33.93c-0.619,0-1.125-0.506-1.125-1.125v-3.794c0-0.619,0.506-1.125,1.125-1.125h0.152v-1.46    c0-1.653,1.343-2.998,2.994-2.998c1.652,0,2.996,1.344,2.996,2.998v1.46h0.152c0.617,0,1.125,0.506,1.125,1.125V27.625z" />
                  </svg>
                </span>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="input-section folded">
            <input
              type="password"
              placeholder="REPEAT YOUR PASSWORD HERE"
              className="repeat-password"
              onChange={handleChange}
            ></input>
            <div className="animated-button">
              {!!typing ? (
                <span className="next-button" onClick={handleSubmit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      background: "transparent",
                      stroke: "rgb(255, 1, 60, 0.8)",
                      boxShadow:
                        "rgb(0, 230, 246, 0.8) -5px 5px, rgb(255, 1, 60, 0.8) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.2) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                    }}
                  >
                    <path d="M7.35351 13.5696C7.0531 13.2692 7.0531 12.7821 7.35351 12.4817L10.7308 9.10439C11.4318 8.40344 12.5682 8.40345 13.2692 9.10439L16.6465 12.4817C16.9469 12.7821 16.9469 13.2692 16.6465 13.5696C16.3461 13.87 15.859 13.87 15.5586 13.5696L12.1813 10.1922C12.0812 10.0921 11.9188 10.0921 11.8187 10.1922L8.44136 13.5696C8.14096 13.87 7.65391 13.87 7.35351 13.5696Z" />
                  </svg>
                </span>
              ) : (
                <span className="icon-paper-plane">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 274.602 274.602"
                    xmlSpace="preserve"
                    style={{
                      fill: "transparent",
                      stroke: "rgb(255, 1, 60, 0.8)",
                      boxShadow:
                        "rgb(0, 230, 246, 0.8) -5px 5px, rgb(255, 1, 60, 0.8) -10px 10px,rgb(255, 1, 60, 0.4) -15px 15px, rgb(255, 1, 60, 0.2) -20px 20px,rgb(255, 1, 60, 0.1) -25px 25px",
                    }}
                  >
                    <path d="M98.037,144.162c11.814-10.185,59.756-56.273,103.753-98.95L31.27,129.214      C72.787,138.005,90.293,142.032,98.037,144.162z M103.071,145.788c-0.736-0.388-1.512-0.697-2.245-0.814      C101.794,145.286,102.53,145.557,103.071,145.788z M246.445,10.162c2.672,1.277,4.454,3.913,4.415,6.933L249,206.281      c-0.039,2.554-1.277,4.92-3.369,6.35c-1.316,0.853-2.828,1.316-4.376,1.316c-0.929,0-1.86-0.156-2.789-0.505      c-32.88-12.664-71.338-27.459-84.426-32.61l-48.489,58.332c-1.473,1.821-3.678,2.789-5.926,2.789      c-0.89,0-1.782-0.156-2.633-0.466c-3.098-1.085-5.112-4.027-5.112-7.282v-75.753c-14.639-3.564-57.86-12.856-85.706-18.705      c-3.252-0.697-5.692-3.33-6.119-6.624c-0.388-3.291,1.316-6.467,4.261-7.901L238.815,9.696      C241.33,8.458,244.197,8.692,246.445,10.162z M233.625,194.975l1.473-149.414c-27.612,46.359-61.115,103.095-71.609,122.343      C177.237,173.247,208.101,185.175,233.625,194.975z" />
                    <path d="M235.097,45.561l-1.473,149.414c-25.523-9.797-56.387-21.728-70.136-27.071      C173.983,148.655,207.482,91.919,235.097,45.561z" />
                    <path d="M31.27,129.214l170.52-84.002c-43.997,42.677-91.942,88.766-103.753,98.95      C90.293,142.032,72.787,138.005,31.27,129.214z" />
                  </svg>
                </span>
              )}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="success">
            <p>ACCOUNT CREATED</p>
          </div>
        )}
      </form>
    </div>
  );
};
export default Form;
