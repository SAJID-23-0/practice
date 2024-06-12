import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameerr, setFirstNameErr] = useState("");
  const [lastnameerr, setLastNameErr] = useState("");
  const [emailerr, setEmailErr] = useState("");
  const [passworderr, setPasswordErr] = useState("");

  const [show, setShow] = useState(false);

  const handelFirstName = (e) => {
    setFirstname(e.target.value);
    setFirstNameErr("");
  };
  const handelLastname = (e) => {
    setLastname(e.target.value);
    setLastNameErr("");
  };
  const handelEmil = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!firstname) {
      setFirstNameErr("First name required!");
    } else if (!lastname) {
      setLastNameErr("Last name required!");
    } else if (!email) {
      setEmailErr("Email is required!");
    } else if (!password) {
      setPasswordErr("Password is required!");
    } else if (!/[A-Z][^A-Z]*[A-Z]/.test(password)) {
      setPasswordErr("Your password must contain at least two capital letters");
      // return false;
    } else if (!/[a-z][^a-z]*[a-z]/.test(password)) {
      /* Check for at least 2 lower case letters */
      setPasswordErr(
        "Your password must contain at least two lower case letters"
      );
      // return false;
    } else if (!/[0-9]/.test(password)) {
      /* Check for at least one digit */
      setPasswordErr("Your password must contain at least one digit");
      // return false;
    } else {
      alert("submited");
    }
  };
  return (
    <>
      <form onSubmit={handelSubmit} className="form">
        <h1>Registration</h1>

        <label>First name*</label>
        <input
          onChange={handelFirstName}
          type="text"
          placeholder="Enter your first name"
        />
        <p>{firstnameerr}</p>

        <label>Last name*</label>
        <input
          onChange={handelLastname}
          type="text"
          placeholder="Enter your last name"
        />
        <p>{lastnameerr}</p>

        <label>Email*</label>
        <input
          onChange={handelEmil}
          type="email"
          placeholder="Enter your email "
        />
        <p>{emailerr}</p>

        <label>Password*</label>
        <div className="password">
          <input
            onChange={handelPassword}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          />
          <div onClick={() => setShow(!show)} className="icon">
            {show ? <LuEye /> : <LuEyeOff />}
          </div>
        </div>
        <p>{passworderr}</p>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
