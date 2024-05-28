/* eslint-disable react/prop-types */
export default function WorkExperienceForm({
  addWorkExperience,
  workExperience,
  handleWorkExperienceChange,
  saveWorkExperience,
  removeWorkExperience,
  workModalStatus,
  setWorkModalStatus,
  openWorkExperience,
}) {
  return (
    <>
      <div className="form-section">
        <h1 className="heading">Work Experience</h1>
        {workExperience.map((el) => {
          if (el.active) {
            return (
              <div key={el.id} className="work-experience">
                <label htmlFor="title">
                  Company
                  <input
                    type="text"
                    placeholder="Company"
                    name="company"
                    id="company"
                    value={el.Company}
                    onChange={(event) => {
                      handleWorkExperienceChange(event, el.id);
                    }}
                  />
                </label>
                <label htmlFor="Position">
                  Position
                  <input
                    type="text"
                    placeholder="Position"
                    name="position"
                    id="position"
                    value={el.position}
                    onChange={(event) => {
                      handleWorkExperienceChange(event, el.id);
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
                      handleWorkExperienceChange(event, el.id);
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
                        handleWorkExperienceChange(event, el.id);
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
                        handleWorkExperienceChange(event, el.id);
                      }}
                    />
                  </label>
                </div>
                <div className="button-wrapper">
                  <button
                    onClick={() => {
                      saveWorkExperience(el.id);
                    }}
                  >
                    save
                  </button>
                  <button
                    onClick={() => {
                      removeWorkExperience(el.id);
                      setWorkModalStatus(false);
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
                    openWorkExperience(el.id);
                  }}
                >
                  {el.company || "Company"}
                </p>
              </div>
            );
          }
        })}
        {workModalStatus || (
          <button
            className="add-WorkExperience"
            onClick={() => {
              setWorkModalStatus(true);
              addWorkExperience();
            }}
          >
            + WorkExperience
          </button>
        )}
      </div>
    </>
  );
}
