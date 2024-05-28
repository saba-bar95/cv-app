/* eslint-disable react/prop-types */
export default function EducationsForm({
  addEducation,
  educations,
  handleEducationChange,
  saveEducation,
  removeEducation,
  eduModalStatus,
  setEduModalStatus,
  openEducation,
}) {
  return (
    <>
      <div className="form-section">
        <h1 className="heading">Education</h1>
        {educations.map((el) => {
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
                      setEduModalStatus(false);
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
        {eduModalStatus || (
          <button
            className="add-education"
            onClick={() => {
              setEduModalStatus(true);
              addEducation();
            }}
          >
            + education
          </button>
        )}
      </div>
    </>
  );
}
