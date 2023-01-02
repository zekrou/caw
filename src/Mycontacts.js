import "./App.css";
import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import Contacts from "./components/Contacts";
import { Link, useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
function Mycontacts() {
  let history = useNavigate();
  const hundleDelete = (id) => {
    var index = Contacts.map(function (e) {
      return e.id;
    }).indexOf(id);
    Contacts.splice(index, 1);
    history("");
  };
  const [query, setQuery] = useState("");
  return (
    <Fragment>
      <div className="text-box1">
        <span>C</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
        <span>L</span>
        <span>i</span>
        <span>s</span>
        <span>t</span>
      </div>
      <div className="table">
        {/* Question 4 de bonus */}
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Link className="d-grid gap-3" to={"/create"}>
          <Button size="lg" className="create">
            Create new contact
          </Button>
        </Link>
        <br></br>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Contacts && Contacts.length > 0
              ? Contacts.filter(
                  (asd) =>
                    asd.Name.toLowerCase().includes(query) ||
                    asd.Phone.toLowerCase().includes(query) ||
                    asd.Email.toLowerCase().includes(query)
                ).map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Phone}</td>
                      <td>{item.Email}</td>
                      <td>
                        <Button
                          className="boutton"
                          onClick={() => hundleDelete(item.id)}
                        >
                          <FaRegTrashAlt />
                        </Button>
                        &nbsp;
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Mycontacts;
