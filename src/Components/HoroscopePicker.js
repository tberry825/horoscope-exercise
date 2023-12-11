

function HoroscopePicker(props) {
    // console.log(props.data, "horo picker props");
    return (
      <div className="horoscopePicker">       
       <div className="signContainer">
            <div className="signs">
                {props.data.map((sign) => (
                    <button className="signBoxes" key={sign.key} onClick={() => props.handleSignClick(sign)}>
                        {sign.sign}
                    </button>
                ))}
            </div>
         </div>
      </div>
    );
  }
  
  export default HoroscopePicker;