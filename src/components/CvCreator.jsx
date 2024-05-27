import CvDisplay from "./CvDisplay";
import { useState } from "react";
import "/src/styles/cv-creator.scss";

export default function CvCreator() {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    profile: "",
    educations: [],
    work_experience: [],
  });
  const [modalStatus, setModalStatus] = useState(false);

  const handleInputChange = (event) => {
    const newForm = {
      ...info,
      [event.target.name]: event.target.value,
    };
    setInfo(newForm);
  };

  const handleEducationChange = (event, id) => {
    const updatedEducations = info.educations.map((el) =>
      el.id === id ? { ...el, [event.target.name]: event.target.value } : el
    );
    setInfo({ ...info, educations: updatedEducations });
  };

  const addEducation = () => {
    setInfo({
      ...info,
      educations: [
        ...info.educations,
        {
          title: "",
          organisation: "",
          location: "",
          start_date: "",
          end_date: "",
          active: true,
          id: Date.now(),
        },
      ],
    });
  };

  // const addWorkExperience = () => {
  //   setInfo({
  //     ...info,
  //     work_experience: [
  //       ...info.work_experience,
  //       {
  //         position: "",
  //         employer: "",

  //       },
  //     ],
  //   });
  // };

  const saveEducation = (id) => {
    const newEducations = info.educations.map((el) => {
      if (el.id === id) {
        return { ...el, active: false };
      }
      return el;
    });
    setInfo({ ...info, educations: newEducations });
    setModalStatus(false);
  };

  const removeEducation = (id) => {
    setInfo({
      ...info,
      educations: info.educations.filter((el) => el.id !== id),
    });
  };

  const openEducation = (id) => {
    const newEducations = info.educations.map((el) => {
      if (el.id === id) return { ...el, active: true };
      return { ...el, active: false };
    });
    setInfo({ ...info, educations: newEducations });
    setModalStatus(true);
  };

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
                maxLength={20}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                maxLength={20}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                maxLength={20}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                maxLength={30}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                maxLength={60}
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

            {info.educations.map((el) => {
              if (el.active) {
                return (
                  <div key={el.id} className="education">
                    <label htmlFor="title">
                      Title of qualification awarded
                      <input
                        type="text"
                        placeholder="Title of qualification"
                        name="title"
                        id="title"
                        value={el.title}
                        onChange={(event) => {
                          handleEducationChange(event, el.id);
                        }}
                      />
                    </label>
                    <label htmlFor="organisation">
                      Organisation
                      <input
                        type="text"
                        placeholder="Organisation"
                        name="organisation"
                        id="organisation"
                        value={el.organisation}
                        onChange={(event) => {
                          handleEducationChange(event, el.id);
                        }}
                      />
                    </label>
                    <label htmlFor="location">
                      Location
                      <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        id="location"
                        value={el.location}
                        onChange={(event) => {
                          handleEducationChange(event, el.id);
                        }}
                      />
                    </label>
                    <div className="date-wrapper">
                      <label htmlFor="start_date">
                        Start Date
                        <input
                          type="date"
                          name="start_date"
                          id="start_date"
                          value={el.start_date}
                          onChange={(event) => {
                            handleEducationChange(event, el.id);
                          }}
                        />
                      </label>
                      <label htmlFor="end">
                        End Date
                        <input
                          type="date"
                          name="end_date"
                          id="end_date"
                          value={el.end_date}
                          onChange={(event) => {
                            handleEducationChange(event, el.id);
                          }}
                        />
                      </label>
                    </div>
                    <div className="button-wrapper">
                      <button
                        onClick={() => {
                          saveEducation(el.id);
                        }}
                      >
                        save
                      </button>
                      <button
                        onClick={() => {
                          removeEducation(el.id);
                          setModalStatus(false);
                        }}
                        style={{ backgroundImage: "none" }}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                );
              }
              if (!el.active) {
                return (
                  <div key={el.id} className="wrapper">
                    <p
                      onClick={() => {
                        openEducation(el.id);
                      }}
                    >
                      {el.organisation || "Organisation"}
                    </p>
                  </div>
                );
              }
            })}
            {modalStatus || (
              <button
                className="add-education"
                onClick={() => {
                  setModalStatus(true);
                  addEducation();
                }}
              >
                + education
              </button>
            )}
          </div>
          <div className="form-section">
            <h1 className="heading">Work Experience</h1>
            <button className="add-work-experience" onClick={() => {}}>
              + work experience
            </button>
          </div>
        </div>
        <CvDisplay info={info} />
      </div>
    </>
  );
}
