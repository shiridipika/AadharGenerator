import { useState } from "react";
import Register from "./Register";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function login() {
    axios.post("/login", user).then((res) => {
      alert(res.data.message);
      props.setLoginUser(res.data.user);
      navigate("/");
    });
  }

  return (
    <main class="text-center login-div">
      <div class="form-signin w-100 m-auto">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          ></input>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            required
          ></input>
          <label for="floatingPassword">Password</label>
        </div>

        <button
          class="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={login}
        >
          Sign in
        </button>
        <br />
        <br />
        <p>or</p>
        <button
          type="button"
          class="btn btn-success btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Register
        </button>

        <Register></Register>
      </div>
    </main>
  );
}

export default Login;
