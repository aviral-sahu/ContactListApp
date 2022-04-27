import React, { useEffect, useState } from "react";

const Contact = () => {
  //const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("personal");
  const [whatsApp, setWhatsApp] = useState("yes");

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
      let newData = [...parsejson, store];

      localStorage.setItem("contactList", JSON.stringify(newData));
    }

    //setData(store);
    alert("sucessfully Added!!!!");
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
      <button onClick={saveContact}>Save Contact</button>
    </>
  );
};
export default Contact;
