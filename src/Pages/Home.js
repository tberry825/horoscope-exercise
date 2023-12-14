import React, { useState } from "react";
import HoroscopePicker from "../Components/HoroscopePicker";
import DateComponent from "../Components/DateComponent";
import ModalComponent from "../Components/ModalComponent";

//The component uses the useState hook to manage several pieces of state:
// buttonClicked: Tracks whether a button has been clicked.
// yesButtonClick and noButtonClick: Track whether the "Yes" or "No" buttons have been clicked.
// selectedSign: Stores the currently selected astrological sign.
// showInfo: Controls the visibility of some information.
// currentSign: Keeps track of the current zodiac sign based on the date.
function Home({ dataProps }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [yesButtonClick, setYesButtonClick] = useState(false);
  const [noButtonClick, setNoButtonClick] = useState(false);
  const [selectedSign, setSelectedSign] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [currentSign, setCurrentSign] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const data = dataProps.horoscopes.astroSigns;
  const [formData, setFormData] = useState({ birthDate: "" });
  const [personalSign, setPersonalSign] = useState("");
  // console.log(data, "DATA")


  // handleButtonClick: Toggles the buttonClicked state when a button is clicked.
  //handleYesButtonClick and handleNoButtonClick: Toggle the respective state variables.
  //handleSignClick: Takes a sign as an argument and updates the selectedSign state while also calling findZodiacSign to determine the current zodiac sign based on the date.
  //findZodiacSign: Finds the zodiac sign based on the current date and updates the currentSign state.
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleYesButtonClick = () => {
    setYesButtonClick(!yesButtonClick);
  };

  const handleNoButtonClick = () => {
    setNoButtonClick(!noButtonClick);
  };

  const handleSignClick = (sign) => {
    console.log(sign, "sign")
    setSelectedSign(sign);
    // findZodiacSign(data, sign);
    setModalVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDate = new Date(formData.birthDate);
    console.log(userDate, "userDate");
    let sign = findZodiacSign(userDate);
    console.log(sign, "sign");
    setPersonalSign(sign);
    // You can perform additional actions with the form data here
    console.log("Form submitted:", formData, sign);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // The code uses the Date object to work with dates.
  //The findZodiacSign function iterates through the astrological signs, compares the current date with the date range of each sign, and determines the current zodiac sign.
  function findZodiacSign() {




    const currentZodiacSign = data.find((sign) => {
      const dateRange = sign.dateRange.split("-")
      const startDate = new Date(dateRange[0] + " " + currentDate.getFullYear());
      const endDate = new Date(dateRange[1] + " " + currentDate.getFullYear());

      if (currentDate >= startDate && currentDate <= endDate) {
        return true;
      }
      return false;
    });

    return currentZodiacSign.sign;
  }
  const sign = findZodiacSign()

  function handleClick() {
    setShowInfo(!showInfo);
    findZodiacSign();
  }
  // This line uses the setModalVisible function, which is likely a state updater function associated with a state variable named modalVisible. Setting modalVisible to false means that the modal should no longer be visible, effectively closing it.
  //This line uses the setSelectedSign function, which is likely a state updater function associated with a state variable named selectedSign. Setting selectedSign to null clears the selected sign, indicating that no specific sign is currently selected.
  //setShowInfo(false): This line uses the setShowInfo function, which is likely a state updater function associated with a state variable named showInfo. Setting showInfo to false hides or resets some information being displayed in the UI.
  function handleClose() {
    setModalVisible(false);
    setSelectedSign(null);
    setShowInfo(false);
  }


  //The component conditionally renders different UI elements based on the state:
  //Buttons and messages are displayed conditionally depending on whether buttonClicked, yesButtonClick, or noButtonClick is true.
  //Modal is used to ask if you want to learn more about the sign you choose.
  //The HoroscopePicker component is rendered when the "Yes" button is clicked (yesButtonClick is true).
  //Information about the selected astrological sign is displayed when a sign is selected.
  return (
    <div className="home">
      <button onClick={handleButtonClick}>
        {buttonClicked ? "Hide" : "Start"}
      </button>
      {buttonClicked ? (
        <>

          <h2>Learn about your horoscope!</h2>
        {/* This form allows users to input their birthdate, submit the form, and see their astrological sign displayed on the page. The astrological sign is determined and displayed dynamically based on the user's input.   */}
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <label>What is your birthday?</label>
              <br />
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
              ></input>
              <br />
              <button type="submit">Submit</button>
              {personalSign ? (
                <div>
                  <p>Your sign is: {personalSign}</p>
                </div>
              ) : null}
            </form>
          </div>
          <DateComponent
            handleClick={handleClick}
            showInfo={showInfo}
            currentSign={sign}
          />
          <h3>Would you like to choose an astrological sign?</h3>
          <button className="yesButton" onClick={handleYesButtonClick}>
            Yes, Please!
          </button>
          <button className="noButton" onClick={handleNoButtonClick}>
            No, Thank you!
          </button>
          {yesButtonClick && (
            <HoroscopePicker handleSignClick={handleSignClick} data={data} />

          )}
          {selectedSign && (
            //This line of code is rendering the ModalComponent component with three props:
            //show controls if the modal is visible or hidded and has a value of yesButtonClick
            //handleClose is set to the function handleNoButtonClick
            <ModalComponent show={yesButtonClick} handleClose={handleClose} selectedSign={selectedSign.sign} />
            // <div className="selectedSign">
            //   <h3>You want to learn about {selectedSign.sign}!</h3>
            // </div>
          )}
          {noButtonClick && <p>Sorry to see you go!</p>}
        </>
      ) : null}
    </div>
  );
}

export default Home;
