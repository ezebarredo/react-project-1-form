import LoginUI from "./LoginUI";

export default function FormUI() {
  function handleSubmit(e: Event) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    //TODO: check later
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    console.log(formData);
  }
  return (
    <form method="post" onSubmit={() => handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="TEST..." />
      </label>
      <hr />
      <label>
        Checkbox:{" "}
        <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" /> Option 1
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true}
          />{" "}
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" /> Option 3
        </label>
      </p>
      <hr />
      <LoginUI />
    </form>
  );
}
