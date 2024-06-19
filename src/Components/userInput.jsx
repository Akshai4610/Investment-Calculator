export default function UserInput({ inputValue, value }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>{inputValue}</label>
          <input type="number" defaultValue={value} required/>
        </p>
      </div>
    </section>
  );
}
