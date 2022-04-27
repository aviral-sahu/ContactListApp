import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Layout from "../pages/Layout";

const Home = () => {
  const [contacs, setContacts] = useState([]);
  const contactList = localStorage.getItem("contactList");
  const parseJson = JSON.parse(contactList);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let storage = localStorage.getItem("contactList");
    let parsejson = JSON.parse(storage);
    if (parsejson) {
      setShow(false);
    }
  }, []);
  useEffect(() => {
    //console.log(parseJson);
    setContacts(parseJson);
  }, [parseJson]);
  const Deleted = (id) => {
    //console.log(id);
    let newContactList = parseJson.filter((ele) => ele.number !== id);
    //console.log(newContactList);
    localStorage.setItem("contactList", JSON.stringify(newContactList));
  };
  return (
    <>
      <Layout />
      <h1>Home</h1>
      <h2>Contacts List</h2>
      <div className="home">
        {show && <Link to="/add-contact">Add contact</Link>}
        {!show &&
          contacs.map((item, index) => (
            <div className="home_items">
              <h1>{item.name} --> </h1>
              <h2> {item.number}</h2>
              <button onClick={() => Deleted(item.number)}>delete</button>
              <Link to={`/edit-contact/${item.number}`}>Edit</Link>
            </div>
          ))}
      </div>
    </>
  );
};
export default Home;
