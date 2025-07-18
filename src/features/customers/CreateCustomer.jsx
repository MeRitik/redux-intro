import { useState } from "react";
import { useDispatch } from "react-redux";

import { createCustomer } from './customerSlice';

function Customer() {
  const [fullName, setFullName] = useState("");
  const [aadharID, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !aadharID) return;

    dispatch(createCustomer(fullName, aadharID));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Aadhar ID</label>
          <input
            value={aadharID}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
