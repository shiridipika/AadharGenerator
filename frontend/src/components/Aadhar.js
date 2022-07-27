function Aadhar(props) {
  let uid = props.user.aadharNo;
  let ouid = uid.split("");
  let str = [];
  for (let i = 1; i < ouid.length + 1; i++) {
    if (i % 4 === 0) {
      str += ouid[i - 1] + " ";
    } else {
      str += ouid[i - 1];
    }
  }

  return (
    <div>
      <div
        class="card mb-3"
        className="aadhar-div"
        style={{ maxWidth: "540px" }}
      >
        <div style={{ border: "0.2px solid #d3d3d3" }}>
          <div class="row g-0">
            <div class="col-md-12">
              <h5
                class="card-title"
                style={{ textAlign: "center", paddingTop: "8px" }}
              >
                Aadhar Card
              </h5>
            </div>
            <div
              class="col-md-4"
              style={{ textAlign: "center", marginTop: "5.5%" }}
            >
              <img src="/profile.png" alt="..."></img>
            </div>
            <div class="col-md-8">
              <p class="card-text" style={{ margin: "0", fontSize: "12px" }}>
                {" "}
                Name
              </p>
              <h6 class="card-text">
                {props.user.fname} {props.user.lname}
              </h6>
              <p class="card-text" style={{ margin: "0", fontSize: "12px" }}>
                {" "}
                Tel
              </p>
              <h6 class="card-text">{props.user.phoneNo}</h6>
              <p class="card-text" style={{ margin: "0", fontSize: "12px" }}>
                {" "}
                Address
              </p>
              <h6 class="card-text">{props.user.address}</h6>
              <br />
            </div>
            <hr />
            <div
              class="col-md-12"
              style={{ backgroundColor: "#FFDCB8", padding: "-10px" }}
            >
              <h5 class="card-title" style={{ textAlign: "center" }}>
                {str}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aadhar;
