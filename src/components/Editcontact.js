import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";

const Editcontact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);

  const currentContact = contacts.find((contact) => contact.id === +id);

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setNumber(currentContact.number);
      setEmail(currentContact.email);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== +id && contact.email === email
    );

    const checkNumber = contacts.find(
      (contact) => contact.id !== +id && contact.number === +number && +number
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
      id: +id,
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });

    toast.success("Updated Succesfully !");

    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 my-2 text-center">Edit contact {+id}</h1>
          <div className="col-md-6 shadow p-5 mx-auto">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group m-3 my-3">
                  <input
                    type="text"
                    placeholder="Name "
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    className="form-control"
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn m-4 btn-dark"
                  />
                  <Link to="/" className="btn mr-3 m-4 btn-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>THIS CONTACT ID DOES NOT EXIST</h1>
      )}
    </div>
  );
};

export default Editcontact;
