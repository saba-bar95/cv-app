/* eslint-disable react/prop-types */
export default function PersonalInfoForm(props) {
  const { handleInputChange } = props;

  return (
    <>
      <div className="form-section">
        <h1 className="heading">Personal Information</h1>
        <div className="inputs">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            maxLength={20}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            maxLength={20}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            maxLength={20}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            maxLength={30}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            maxLength={60}
            onChange={handleInputChange}
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
    </>
  );
}
