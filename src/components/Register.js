import React from "react";
import Image from "../assets/register.jpg";
export default function Register() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confpassword, setConfPassword] = React.useState(null);
  return (
    <div className="main-cont">
      <div className="login-cont">
        <div className="login-img">
          {" "}
          <img src={Image} alt="" />
        </div>

        <div className="login-form">
          <h1>Register</h1>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confpassword}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
            />
          </form>

          <div className="register-button">
            <a>Register</a>
          </div>
          <a className="last" href="/login">
            Have an account ?
          </a>
        </div>
      </div>
    </div>
  );
}
