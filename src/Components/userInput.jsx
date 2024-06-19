import { useState } from "react";
export default function UserInput({userInput,inputChange}) {
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
            defaultValue={userInput.initialInvestment}
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
            defaultValue={userInput.annualInvestment}
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
            defaultValue={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => inputChange('duration', event.target.value)}
            defaultValue={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
