/* eslint-disable react/prop-types */
export default function CvDisplay(props) {
  return (
    <>
      <div className="cv-display">
        <div className="fullname">
          <h1 className="firstname">{props.info.firstname || "first"}</h1>
          <h1 className="lastname">{props.info.lastname || "last"}</h1>
        </div>
        <div className="left-side">
          <div className="profile">
            <h2 className="section-heading">profile</h2>
            <p>
              {" "}
              {props.info.profile ||
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illomagnam velit magni natus eveniet eos?"}
            </p>
          </div>
          <div className="contact">
            <h2 className="section-heading">contact</h2>
            <div className="wrapper">
              <img src="/src/assets/images/call.png" alt="phone" />
              <p> {props.info.phone || "+123123321"}</p>
            </div>
            <div className="wrapper">
              <img src="/src/assets/images/email.png" alt="email" />
              <p> {props.info.email || "example@gmail.com"}</p>
            </div>
            <div className="wrapper">
              <img src="/src/assets/images/address.png" alt="address" />
              <p>
                {" "}
                {props.info.address ||
                  "Name Address 13th Street 47 W 13th St, New York, NY ..."}
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
            {props.info.educations.map((el) => {
              console.log(el);
              return (
                <div key={el.id} className="education-wrapper">
                  <h1>{el.title || "Title of qualification awarded"} </h1>
                  <h2>{el.organisation || "Organisation"}</h2>
                  <div className="wrapper">
                    <div className="date-wrapper">
                      <h2>{el.start_date || "Start Date"} </h2>
                      <span>-</span>
                      <h2>{el.end_date || "End Date"} </h2>
                    </div>
                    <div className="location-wrapper">
                      <span>|</span>
                      <h2>{el.location || "Location"} </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
