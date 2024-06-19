import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/userInput";
import Result from "./Components/Result";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function inputChange(inputValue, value) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputValue]: +value,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} inputChange={inputChange}/>
      <Result userInput={userInput}/>
    </main>
  );
}