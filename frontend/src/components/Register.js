import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
    password: "",
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function register() {
    const { fname, lname, email, phoneNo, password, address } = user;
    if (
      fname &&
      lname &&
      email &&
      phoneNo &&
      password &&
      address &&
      phoneNo.length === 10 &&
      password.length >= 8
    ) {
      axios.post("/register", user).then((res) => {
        alert(res.data.message);
      });
    }
  }

  const prevent = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
            </div>
              <form onSubmit={(event) => prevent(event)}>
              <div class="modal-body" className="modalBody">
                <div class="row">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="fname"
                      value={user.fname}
                      onChange={handleChange}
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lname"
                      value={user.lname}
                      placeholder=""
                      onChange={handleChange}
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="phone" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      name="phoneNo"
                      value={user.phoneNo}
                      placeholder="9999999999"
                      pattern="[0-9]{10}"
                      onChange={handleChange}
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please enter a valid phone number.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      placeholder="you@example.com"
                      onChange={handleChange}
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={user.password}
                      id="password"
                      pattern="[a-zA-Z0-9]{8,}"
                      onChange={handleChange}
                      required
                    ></input>
                    {

                    }
                    <div class="invalid-feedback">
                      Please enter your password.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="address"
                      value={user.address}
                      id="address"
                      placeholder="1234 Main St"
                      onChange={handleChange}
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please enter your address.
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button class="btn btn-primary" onClick={register}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
