import React, { useState } from 'react';

const SumCalculator = () => {
  const [sum, setSum] = useState(0);

  return (
    <div>
      <p>{sum}</p>
      <input
        type="number"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const value = e.target.value.trim();
            if (value !== '' && !isNaN(value)) {
              setSum((prev) => prev + Number(value));
            }
            e.target.value = ''; 
          }
        }}
      />
    </div>
  );
};

export { SumCalculator };
