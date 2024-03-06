import React, { useState } from "react";
import "../App.css";
import IMG from "../assets/BMI.jpg";
export const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState();

  const claculate = () => {
    const heightVal = /^\d+$/.test(height);
    const weightVal = /^\d+$/.test(weight);
    if (heightVal && weightVal) {
      const heightCalc = height / 100;
      const valueBmi = weight / (heightCalc * heightCalc);
      setBmi(valueBmi.toFixed(2));
      if (valueBmi < 18.5) {
        setBmiStatus("Under Weight");
      } else if (valueBmi >= 18.5 && valueBmi < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (valueBmi >= 25 && valueBmi < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valid numeric values for height and weight.");
    }
  };
  const clearData = () => {
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");
  };
  return (
    <>
      <div className="container">
        <div className="left">
          <img src={IMG} />
        </div>
        <div className="right">
          <h2>BMI Calculator</h2>
          {error && <p className="error">{error}</p>}
          <div className="input_div">
            <label>Height(cm)</label>
            <input
              type="text"
              placeholder=""
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input_div">
            <label>Weight(kg)</label>
            <input
              type="text"
              placeholder=""
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="button">
            <button className="primary" onClick={claculate}>
              Calculate BMI
            </button>
            <button className="secondary" onClick={clearData}>
              Clear
            </button>
          </div>
          {bmi && (
            <div className="result">
              <p>
                Your BMI is: <b>{bmi}</b>
              </p>
              <p>
                Status: <b>{bmiStatus}</b>
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="copyrights">Designed by Makesh</p>
    </>
  );
};
