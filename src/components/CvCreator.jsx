import { useState } from "react";
import PersonalInfoForm from "./form/PersonalInfo";
import DisplayPersonalInfo from "./display/PersonalInfo";
import EducationsForm from "./form/Educations";
import WorkExperienceForm from "./form/WorkExperience";
import DisplayEducations from "./display/Educations";
import DisplayWorkExperience from "./display/WorkExperience";

export default function CvCreator() {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [educations, setEducations] = useState([
    {
      title: "Bachelor of Architecture",
      organisation: "Georgian Technical University",
      location: "Georgia, Tbilisi",
      start_date: "2018/11/30",
      end_date: "2022/06/10",
      active: false,
      id: Date.now(),
    },
  ]);
  const [eduModalStatus, setEduModalStatus] = useState(false);
  const [workExperience, setWorkExperience] = useState([
    {
      company: "Big Company",
      position: "Marketer",
      start_date: "2021/10/15",
      location: "Georgia, Tbilisi",
      end_date: "2024/02/10",
      active: false,
      id: Date.now(),
    },
  ]);
  const [workModalStatus, setWorkModalStatus] = useState(false);

  const handleInputChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        title: "",
        organisation: "",
        location: "",
        start_date: "",
        end_date: "",
        active: true,
        id: Date.now(),
      },
    ]);
  };

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        company: "",
        position: "",
        location: "",
        start_date: "",
        end_date: "",
        active: true,
        id: Date.now(),
      },
    ]);
  };

  const removeEducation = (id) => {
    setEducations(educations.filter((el) => el.id !== id));
  };

  const removeWorkExperience = (id) => {
    setWorkExperience(workExperience.filter((el) => el.id !== id));
  };

  const handleEducationChange = (event, id) => {
    const updatedEducations = educations.map((el) =>
      el.id === id ? { ...el, [event.target.name]: event.target.value } : el
    );
    setEducations(updatedEducations);
  };

  const handleWorkExperienceChange = (event, id) => {
    const updatedWorkExperience = workExperience.map((el) =>
      el.id === id ? { ...el, [event.target.name]: event.target.value } : el
    );
    setWorkExperience(updatedWorkExperience);
  };

  const saveEducation = (id) => {
    const newEducations = educations.map((el) => {
      if (el.id === id) {
        return { ...el, active: false };
      }
      return el;
    });
    setEducations(newEducations);
    setEduModalStatus(false);
  };

  const saveWorkExperience = (id) => {
    const newWorkExperience = workExperience.map((el) => {
      if (el.id === id) {
        return { ...el, active: false };
      }
      return el;
    });
    setWorkExperience(newWorkExperience);
    setWorkModalStatus(false);
  };

  const openEducation = (id) => {
    const newEducations = educations.map((el) => {
      if (el.id === id) return { ...el, active: true };
      return { ...el, active: false };
    });
    setEducations(newEducations);
    setEduModalStatus(true);
  };

  const openWorkExperience = (id) => {
    const newWorkExperience = workExperience.map((el) => {
      if (el.id === id) return { ...el, active: true };
      return { ...el, active: false };
    });
    setWorkExperience(newWorkExperience);
    setWorkModalStatus(true);
  };

  return (
    <>
      <div className="cv-creator">
        <div className="form">
          <PersonalInfoForm handleInputChange={handleInputChange} />
          <EducationsForm
            addEducation={addEducation}
            educations={educations}
            handleEducationChange={handleEducationChange}
            saveEducation={saveEducation}
            removeEducation={removeEducation}
            eduModalStatus={eduModalStatus}
            setEduModalStatus={setEduModalStatus}
            openEducation={openEducation}
          />
          <WorkExperienceForm
            addWorkExperience={addWorkExperience}
            workExperience={workExperience}
            handleWorkExperienceChange={handleWorkExperienceChange}
            saveWorkExperience={saveWorkExperience}
            removeWorkExperience={removeWorkExperience}
            workModalStatus={workModalStatus}
            setWorkModalStatus={setWorkModalStatus}
            openWorkExperience={openWorkExperience}
          />
        </div>
        <div className="cv-display">
          <DisplayPersonalInfo info={info} />
          <div className="right-side">
            <DisplayEducations educations={educations} />
            <DisplayWorkExperience workExperience={workExperience} />
          </div>
        </div>
      </div>
    </>
  );
}
