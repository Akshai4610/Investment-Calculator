import Header from "./Components/Header";
import UserInput from "./Components/userInput";

function App() {
  return (
    <main>
      <Header />
      <div id="user-input">
          <UserInput inputValue={"Initial Investment"} value={"10000"} />
          <UserInput inputValue={"Annual Investment"} value={"1200"} />
          <UserInput inputValue={"Expected Return"} value={6} />
          <UserInput inputValue={"Duration"} value={10} />
      </div>
    </main>
  );
}

export default App;
