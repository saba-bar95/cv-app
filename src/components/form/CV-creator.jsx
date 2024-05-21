/* eslint-disable react/prop-types */
import { useState } from "react";
import "/src/styles/cv-creator.scss";

export default function CVcreator({ displayForm }) {
  const [info, setInfo] = useState({});

  const handleInputChange = (event) => {
    const newForm = {
      ...info,
      [event.target.name]: event.target.value,
    };

    setInfo(newForm);
  };

  if (!displayForm) return null;
  return (
    <>
      <div className="cv-creator">
        <div className="form">
          <div className="form-section">
            <h1 className="heading">Personal Information</h1>
            <div className="inputs">
              <input
                type="text"
                name="firstname"
                className="firstname"
                placeholder="Firstname"
                maxLength={15}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="lastname"
                className="lastname"
                placeholder="Lastname"
                maxLength={15}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />

              <input
                type="text"
                name="phone"
                className="phone"
                placeholder="Phone"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Email"
                maxLength={20}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="address"
                className="address"
                placeholder="Address"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>
          <div className="form-section">
            <h1 className="heading">Profile</h1>
          </div>
          <div className="form-section">
            <h1 className="heading">Education</h1>
          </div>
          <div className="form-section">
            <h1 className="heading">Work Experience</h1>
          </div>
          <div className="form-section">
            <h1 className="heading">Contact</h1>
          </div>
          <form action="" onSubmit={() => {}}></form>
        </div>
        <div className="cv-display">
          <div className="fullname">
            <h1 className="firstname">
              {info.firstname ? `${info.firstname}` : "first"}
            </h1>
            <h1 className="lastname">
              {info.lastname ? `${info.lastname}` : "last"}
            </h1>
          </div>
          <div className="left-side">
            <div className="profile">
              <h2 className="section-heading">profile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                tempora ratione enim aliquid. Ut, obcaecati alias quasi
                veritatis mollitia odit eveniet optio aliquam? Dolor, est?
                Corporis praesentium cupiditate deleniti necessitatibus!
              </p>
            </div>
            <div className="contact">
              <h2 className="section-heading">contact</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident consectetur quia, deleniti error ducimus autem!
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="work-experience">
              <h2 className="section-heading">work experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>
            </div>
            <div className="education">
              <h2 className="section-heading">education</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                dignissimos provident nesciunt enim excepturi cumque
                perspiciatis maxime amet accusamus cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
