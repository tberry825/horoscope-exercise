
//The DateComponent takes three props as arguments: handleClick, showInfo, and currentSign.
//handleClick is a function that is triggered when a button is clicked.
//showInfo is a boolean that determines whether to display information about today's date and the current Zodiac sign.
//currentSign is a string that represents the current Zodiac sign.
function DateComponent({ handleClick, showInfo, currentSign }) {
  // console.log(currentSign, "CURRENT SIGN")
  //The component uses the Date object to obtain the current date as a string in the format 'MM/DD/YYYY' using toLocaleDateString.
  const todayString = new Date().toLocaleDateString("en-US");

  //The component renders a button with a label that dynamically changes based on the value of the showInfo prop. If showInfo is true, the label is "hide," otherwise, it is "see."
  //If showInfo is true, the component renders a div containing information about today's date and the current Zodiac sign (if available).
  return (
    <div className='dateComponent'>
      <button onClick={handleClick}>
        Click here to {showInfo ? "hide" : "see"} today's date
      </button>
      {showInfo && (
        
          //Information includes today's date (todayString) and the current Zodiac sign (currentSign), which defaults to 'Unknown' if not provided.
        <div>
          <p>Today's date is: {todayString}</p>
          <p>The current Zodiac sign is: {currentSign ? currentSign : 'Unknown'}</p>
        </div>
        
      )}
      
    </div>
  );
}

export default DateComponent;



