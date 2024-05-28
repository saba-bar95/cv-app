/* eslint-disable react/prop-types */
export default function DisplayEducations({ educations }) {
  return (
    <div className="education">
      <h2 className="section-heading">education</h2>
      {educations.map((el) => {
        return (
          <div key={el.id} className="education-wrapper">
            <h1>{el.title || "Title of qualification awarded"} </h1>
            <h2>{el.organisation || "Organisation"}</h2>
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
