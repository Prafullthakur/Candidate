import React from "react";
import Image from "../assets/login.jpg";
export default function Login() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <div className="main-cont">
      <div className="login-cont">
        <div className="login-img">
          {" "}
          <img src={Image} alt="" />
        </div>

        <div className="login-form">
          <h1>Login</h1>
          <form>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </form>

          <div className="login-button">
            <a>Log in</a>
          </div>
          <a className="last" href="/register">
            Don't have an account ?
          </a>
        </div>
      </div>
    </div>
  );
}
