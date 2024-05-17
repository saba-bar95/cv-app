import "/src/styles/landing.scss";
import { useState } from "react";
// import Form from "./Form";

export default function Landing() {
  const [displayForm, setDisplayForm] = useState(false);
  const [colorAnimated, setColorAnimated] = useState(false);
  const [fadeOutAnimated, setFadeOutAnimated] = useState(false);

  const buttonClassNames = function () {
    const color = `${colorAnimated ? "visible" : ""}`;
    const fadeOut = `${fadeOutAnimated ? "fade-out-left" : ""}`;
    return `${color} ${fadeOut}`;
  };

  return (
    <>
      <div className="landing">
        <h1
          className={fadeOutAnimated ? "fade-out-top" : ""}
          onAnimationEnd={() => {
            setColorAnimated(true);
          }}
        >
          <span className={colorAnimated ? "linear-color" : ""}>Transform</span>{" "}
          your job search with our powerful{" "}
          <span className={colorAnimated ? "linear-color" : ""}>CV</span>{" "}
          application
        </h1>
        <button
          className={buttonClassNames()}
          onClick={() => {
            setFadeOutAnimated(true);
            setTimeout(() => {
              setDisplayForm(true);
            }, 1000);
          }}
        >
          Get Started
        </button>
      </div>
      {/* <Form displayForm={displayForm} /> */}
    </>
  );
}
