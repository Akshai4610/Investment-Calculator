export default function UserInput({ inputValue, value }) {
  return (
    <>
      <label>{inputValue}</label>
      <input type="number" defaultValue={value} />
    </>
  );
}
