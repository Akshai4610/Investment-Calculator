import { useState } from "react";
export default function UserInput() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function inputChange(inputValue, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputValue]: value,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              inputChange('initialInvestment', event.target.value)
            }
            defaultValue={UserInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              inputChange('annualInvestment', event.target.value)
            }
            defaultValue={UserInput.annualInvestment}
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              inputChange('expectedReturn', event.target.value)
            }
            defaultValue={UserInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => inputChange('duration', event.target.value)}
            defaultValue={UserInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
