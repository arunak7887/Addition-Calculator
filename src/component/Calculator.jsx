import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>

      First Number:<input type="number" value={num1} onChange={handleNum1Change} />+
      
      Second Number:<input type="number" value={num2} onChange={handleNum2Change} />
      <br></br>
      <button onClick={handleAddition}>Add</button>

      {result && (
        <p style={{ color: "red" }}>Total Sum Of Two Numbers: {result}</p>
      )}
    </div>
  );
}

export default Calculator;
