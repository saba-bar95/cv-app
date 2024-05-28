/* eslint-disable react/prop-types */
export default function DisplayPersonalInfo(props) {
  return (
    <>
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
    </>
  );
}
