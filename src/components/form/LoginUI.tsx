import { useState } from "react";

// TODO: Take form with all validation put in new component and add to submit. On submit can use handle submit.

// TODO: check useState are not used. (Pending)
// New component
function LoginUI() {
  const [username, setUsername] = useState("");
  // const [_usernameError, setUsernameError] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [_userPasswordError, setUserPasswordError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  //TODO: validate username that is long enough -> DONE
  const userNameLength = (event: React.FormEvent<HTMLInputElement>): void => {
    setUsername((_username) => (event.target as HTMLInputElement).value);
    // if ((event.target as HTMLInputElement).value.length < 5) {
    //   // setUsernameError((_usernameError) => "Min 5 Characters");
    // }
  };

  const hasCapitalLetter = (string: string) => {
    return string
      .split("")
      .reduce(
        (foundCapital, char) => foundCapital || char !== char.toLowerCase(),
        false
      );
  };

  // TODO: validate form with password with 4 bullets points.
  const changePassword = (event: React.FormEvent<HTMLInputElement>): void => {
    // console.log((event.target as HTMLInputElement).value);
    if (event) {
      //TODO: try to solve event error -> DONE
      // https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
      setUserPassword(
        (_userPassword) => (event.target as HTMLInputElement).value
      );
      // if ((event.target as HTMLInputElement).value.length < 8) {
      //   setUserPasswordError((_userPasswordError) => "Min 8 characters");
      // }
      // if (!hasCapitalLetter((event.target as HTMLInputElement).value)) {
      //   setUserPasswordError((_userPasswordError) => "1 Capital letter");
      // }
      // if (!/\d/.test((event.target as HTMLInputElement).value)) {
      //   setUserPasswordError((_userPasswordError) => "Min a number");
      // }
      // if (!/[!@#$%^&*]/.test((event.target as HTMLInputElement).value)) {
      //   setUserPasswordError((_userPasswordError) => "Min a special character");
      // }
    }
    enableSubmitBtn((event.target as HTMLInputElement).value);
  };

  // Pending enable Submit Btn. --> DONE
  const enableSubmitBtn = (password: string) => {
    const isUsernameValid = username.length >= 5;
    const isPasswordValid =
      password.length >= 8 &&
      hasCapitalLetter(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password);
    setIsSubmitEnabled(isUsernameValid && isPasswordValid);
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
          {/* Another fix */}
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
              setUserEmail(
                (_userEmail) => (event.target as HTMLInputElement).value
              )
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
              setUserTelephone(
                (_userTelephone) => (event.target as HTMLInputElement).value
              )
            }
          />
        </label>
        <label>
          <button type="reset">Reset form</button>
          {/*  TODO: Disable submit button if form is not validated. "DONE" */}
          <button disabled={!isSubmitEnabled} type="submit">
            Submit form
          </button>
        </label>
      </div>
    </>
  );
}

export default LoginUI;
