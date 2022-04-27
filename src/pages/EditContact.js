import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("personal");
  const [whatsApp, setWhatsApp] = useState("yes");

  useEffect(() => {
    let storage = localStorage.getItem("contactList");
    let parsejson = JSON.parse(storage);
    let output = parsejson.filter((value, ind) => value.number === id);
    //console.log(output);
    setName(output[0].name);
    setNumber(output[0].number);
    setType(output[0].type);
    setWhatsApp(output[0].whatsApp);
  }, [id]);

  const saveContact = () => {
    const store = {
      name: name,
      number: number,
      type: type,
      whatsApp: whatsApp
    };
    //console.log(store);
    let storage = localStorage.getItem("contactList");
    if (!storage) {
      localStorage.setItem("contactList", JSON.stringify([store]));
    } else {
      let parsejson = JSON.parse(storage);
      //let newData = [...parsejson, store];
      const newrepeat = parsejson.findIndex((element) => element.number === id);
      console.log(newrepeat, store);
      parsejson[newrepeat] = store;
      localStorage.setItem("contactList", JSON.stringify(parsejson));
    }

    setData(store);
  };

  return (
    <>
      <label>Name: </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Phone Number: </label>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <label> type: </label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>personal</option>
        <option>office</option>
      </select>
      <br />
      <label> iswhatsapp: </label>
      <select value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)}>
        <option>yes</option>
        <option>no</option>
      </select>

      <br />
      <br />
      <button onClick={saveContact}>Edit Contact</button>
      <br />
      <p>
        Return to home page :{" "}
        <span>
          {" "}
          <Link to="/"> Home</Link>
        </span>
      </p>
    </>
  );
};
export default EditContact;
