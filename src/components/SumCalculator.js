import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  // State for the list of numbers
  const [numbers, setNumbers] = useState([]);
  // State for the current total sum
  const [sum, setSum] = useState(0);
  // State for the current input value
  const [inputValue, setInputValue] = useState('');

  // useEffect that recalculates the sum asynchronously when numbers change
  useEffect(() => {
    // Using setTimeout to simulate an asynchronous calculation
    const timer = setTimeout(() => {
      const newSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(newSum);
    }, 0);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [numbers]);

  // Handle changes in the input field
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add the number to the numbers array when a button is clicked or Enter is pressed
  const handleAddNumber = () => {
    const parsedNumber = parseInt(inputValue, 10);
    // Check if the input is a valid number before adding
    if (!isNaN(parsedNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedNumber]);
    }
    // Clear the input field
    setInputValue('');
  };

  // Allow adding the number by pressing the Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNumber();
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add Number</button>
      </div>
      <div>
        <h2>Total Sum: {sum}</h2>
      </div>
      <div>
        <h3>Numbers Entered:</h3>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SumCalculator;
