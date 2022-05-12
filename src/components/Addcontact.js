import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Addcontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const contacts = useSelector((state) => state);

  // console.log(contacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === +number && +number
    );

    if (!name || !email || !number) {
      return toast.warning("Please fill all the areas");
    }

    if (checkEmail) {
      return toast.error("This email already used");
    }

    if (checkNumber) {
      return toast.error("This Number already used");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });

    toast.success("Added Succesfully !");

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 my-2 text-center">Add contact</h1>
        <div className="col-md-6 shadow p-5 mx-auto">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group m-3 my-3">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name "
                  className="form-control"
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="submit"
                  value="Add Student"
                  className="btn btn-block m-4 btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcontact;
