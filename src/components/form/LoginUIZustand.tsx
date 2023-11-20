import useStore from "../../store/store";

// New component
function LoginUI() {
  // Updating functions in the store
  const setUserName = useStore((state) => state.setUserName);
  const setUserPassword = useStore((state) => state.setUserPassword);
  const setIsSubmitEnabled = useStore((state) => state.setIsSubmitEnabled);
  const setUserEmail = useStore((state) => state.setUserEmail);
  const setUserTelephone = useStore((state) => state.setUserTelephone);

  // User Name
  const userNameLength = (event: React.FormEvent<HTMLInputElement>): void => {
    setUserName((event.target as HTMLInputElement).value);
  };
  // User Password
  const hasCapitalLetter = (string: string) => {
    return string
      .split("")
      .reduce(
        (foundCapital, char) => foundCapital || char !== char.toLowerCase(),
        false
      );
  };
  // User Password
  const changePassword = (event: React.FormEvent<HTMLInputElement>): void => {
    if (event) {
      setUserPassword((event.target as HTMLInputElement).value);
    }
    enableSubmitBtn((event.target as HTMLInputElement).value);
  };

  // Enable Submit BTN after validation
  const enableSubmitBtn = (password: string) => {
    const isUsernameValid = userName.length >= 5;
    const isPasswordValid =
      password.length >= 8 &&
      hasCapitalLetter(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password);
    setIsSubmitEnabled(isUsernameValid && isPasswordValid);
  };

  // Variables to show in Form when state changes (in real time)
  const userName = useStore((state) => state.userName);
  const userPassword = useStore((state) => state.userPassword);
  const userEmail = useStore((state) => state.userEmail);
  const userTelephone = useStore((state) => state.userTelephone);
  const isSubmitEnabled = useStore((state) => state.isSubmitEnabled);

  // Render Form
  return (
    <>
      <div>
        <h2>FORM Validation [React - Zustand] Project 1 </h2>
      </div>
      <hr />
      <h2>Login form</h2>
      <div className="login-form">
        <p>{userName}</p>
        <p>{userEmail}</p>
        <p>{userTelephone}</p>
        <label>
          <p>Username</p>
          <input type="text" onInput={userNameLength} />
          <p className={userName.length >= 5 ? "green" : "red"}>
            {userName.length >= 5 ? "Valid Username" : "Min 5 Characters"}
          </p>
        </label>
        <p>Password</p>
        <label>
          <input type="password" onInput={changePassword} required />
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
              setUserEmail((event.target as HTMLInputElement).value)
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
              setUserTelephone((event.target as HTMLInputElement).value)
            }
          />
        </label>
        <br />
        <br />
        <label>
          <button disabled={!isSubmitEnabled} type="submit">
            Submit form
          </button>
        </label>
      </div>
    </>
  );
}

export default LoginUI;
