import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContactHandle = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Deleted !");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-2 text-right"></div>
        <Link
          to="/add"
          className="btn col-md-3 btn-secondary btn-small mt-0 my-5"
        >
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary mr-2"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        deleteContactHandle(contact.id);
                      }}
                      className="btn btn-small btn-danger mr-2"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
