/* eslint-disable react/prop-types */
import { useState } from "react";
import "/src/styles/cv-creator.scss";

export default function CVcreator({ displayForm }) {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    profile: "",
  });
  const [educations, setEducations] = useState([]);

  if (!displayForm) return null;

  const handleInputChange = (event) => {
    const newForm = {
      ...info,
      [event.target.name]: event.target.value,
    };
    setInfo(newForm);
  };

  const handleEducationChange = (index, event) => {
    const updatedEducations = educations.map((el) =>
      el.index === index
        ? { ...el, [event.target.name]: event.target.value }
        : el
    );

    setEducations(updatedEducations);
  };

  function addEducation() {
    setEducations([...educations, { school: "", index: Date.now() }]);
  }

  function removeEducation(id) {
    setEducations(educations.filter((el) => el.index !== id));
  }

  console.log(educations);

  function NewEducation(props) {
    return (
      <div>
        <input
          type="text"
          placeholder="edu"
          name="school"
          onChange={(event) => {
            handleEducationChange(props.index, event);
          }}
        />
        <button
          onClick={() => {
            removeEducation(props.index);
          }}
        >
          remove
        </button>
      </div>
    );
  }

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
                placeholder="Firstname"
                maxLength={15}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                maxLength={15}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                maxLength={15}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                maxLength={20}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                maxLength={50}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>
          <div className="form-section">
            <h1 className="heading">Profile</h1>
            <textarea
              name="profile"
              placeholder="Some profile"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></textarea>
          </div>
          <div className="form-section">
            <h1 className="heading">Education</h1>
            <button
              className="add-education"
              onClick={() => {
                addEducation();
              }}
            >
              + education
            </button>
            <div className="educations-wrapper">
              {educations.map((el) => {
                return <NewEducation index={el.index} key={el.index} />;
              })}
            </div>
          </div>
          <div className="form-section">
            <h1 className="heading">Work Experience</h1>
            <button className="add-work-experience" onClick={() => {}}>
              + work experience
            </button>
          </div>
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
                {" "}
                {info.profile
                  ? `${info.profile}`
                  : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illomagnam velit magni natus eveniet eos?"}
              </p>
            </div>
            <div className="contact">
              <h2 className="section-heading">contact</h2>
              <div className="wrapper">
                <img src="/src/assets/images/call.png" alt="phone" />
                <p> {info.phone ? `${info.phone}` : "+123123321"}</p>
              </div>
              <div className="wrapper">
                <img src="/src/assets/images/email.png" alt="email" />
                <p> {info.email ? `${info.email}` : "example@gmail.com"}</p>
              </div>
              <div className="wrapper">
                <img src="/src/assets/images/address.png" alt="address" />
                <p>
                  {" "}
                  {info.address
                    ? `${info.address}`
                    : "Name Address 13th Street 47 W 13th St, New York, NY ..."}
                </p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="work-experience">
              <h2 className="section-heading">work experience</h2>
            </div>
            <div className="education">
              <h2 className="section-heading">education</h2>
              <div className="education-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
