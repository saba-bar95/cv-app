/* eslint-disable react/prop-types */
export default function DisplayWorkExperience({ workExperience }) {
  return (
    <div className="education">
      <h2 className="section-heading">work experience</h2>
      {workExperience.map((el) => {
        return (
          <div key={el.id} className="work-experience-wrapper">
            <h1>{el.company || "Company"} </h1>
            <h2>{el.position || "Position"}</h2>
            <h2>{el.location || "Location"} </h2>
            <div className="wrapper">
              <div className="date-wrapper">
                <h3>{el.start_date || "Start Date"} </h3>
                <span>-</span>
                <h3>{el.end_date || "End Date"} </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
