import { useState } from "react";

// TODO: Take form with all validation put in new component and add to submit. On submit can use handle submit.

// New component
function LoginUI() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  // Pending enable Submit Btn
  const enableSubmitBtn = () => {
    const isUsernameValid = username.length >= 5;
    const isPasswordValid =
      userPassword.length >= 8 &&
      hasCapitalLetter(userPassword) &&
      /\d/.test(userPassword) &&
      /[!@#$%^&*]/.test(userPassword);
    setIsSubmitEnabled(isUsernameValid && isPasswordValid);
  };

  const hasCapitalLetter = (event) => {
    return event
      .split("")
      .reduce(
        (foundCapital, char) => foundCapital || char !== char.toLowerCase(),
        false
      );
  };
  // TODO: validate form with password with 4 bullets points.
  const changePassword = (event) => {
    console.log(event.target.value);
    setUserPassword((_userPassword) => event.target.value);
    if (event.target.value.length < 8) {
      setUserPasswordError((_userPasswordError) => "Min 8 characters");
    }
    if (!hasCapitalLetter(event.target.value)) {
      setUserPasswordError((_userPasswordError) => "1 Capital letter");
    }
    if (!/\d/.test(event.target.value)) {
      setUserPasswordError((_userPasswordError) => "Min a number");
    }
    if (!/[!@#$%^&*]/.test(event.target.value)) {
      setUserPasswordError((_userPasswordError) => "Min a special character");
    }
    enableSubmitBtn();
  };

  //TODO: validate username that is long enough
  const userNameLength = (event) => {
    setUsername((username) => event.target.value);
    if (event.target.value < 5) {
      setUsernameError((usernameError) => "Min 5 Characters");
    }
  };
  return (
    <>
      <div>
        <h2>React Project 1 - FORM</h2>
      </div>
      <hr />
      <h2>Login form</h2>
      <div className="login-form">
        <p>{username}</p>
        <p>{userEmail}</p>
        <p>{userTelephone}</p>
        <label>
          <p>Username</p>
          <input type="text" onInput={userNameLength} />
          <p className={username.length >= 5 ? "green" : "red"}>
            {username.length >= 5 ? "Valid Username" : "Min 5 Characters"}
          </p>
        </label>
        <p>Password</p>
        <label>
          <input type="password" onInput={changePassword} required />
          {/* create 1 ul 4 li for password validation: length, capital letter, number, special character */}
          <ul>
            {/* conditional rendering */}
            <li className={userPassword.length >= 8 ? "green" : "red"}>
              {userPassword.length >= 8
                ? "Min 8 characters"
                : "Min 8 characters"}
            </li>
            <li className={hasCapitalLetter(userPassword) ? "green" : "red"}>
              {hasCapitalLetter(userPassword)
                ? "1 Capital letter"
                : "1 Capital letter"}
            </li>
            <li className={/\d/.test(userPassword) ? "green" : "red"}>
              {/\d/.test(userPassword) ? "Min a number" : "Min a number"}
            </li>
            <li className={/[!@#$%^&*]/.test(userPassword) ? "green" : "red"}>
              {/[!@#$%^&*]/.test(userPassword)
                ? "Min a special character"
                : "Min a special character"}
            </li>
          </ul>
        </label>
        <p>Email</p>
        <label>
          <input
            type="email"
            onInput={(event) =>
              setUserEmail((_userEmail) => event.target.value)
            }
            required
          />
        </label>
        <br />
        <p>Telephone</p>
        <label>
          <input
            type="tel"
            onInput={(event) =>
              setUserTelephone((_userTelephone) => event.target.value)
            }
          />
        </label>
        <label>
          <button type="reset">Reset form</button>
          {/*  TODO: Disable submit button if form is not validated. (Extra, ok if not do) */}
          <button disabled={!isSubmitEnabled} type="submit">
            Submit form
          </button>
        </label>
      </div>
    </>
  );
}

export default LoginUI;
