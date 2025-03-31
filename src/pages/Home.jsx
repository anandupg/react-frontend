import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {

  const [property, setProperty] = useState({
    title: "",
    desc: "", 
    location: "",
    price: ""
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/item/ins", property);
      alert("Property added successfully!");
      setProperty({title: "",
        desc: "", 
        location: "",
        price: "" });
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h1>Home</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' name="title" value={property.title} placeholder='Item' onChange={handleChange}></input>
          <input type='text' name="desc" value={property.desc} placeholder='description' onChange={handleChange}></input>
          <input type='text' name="location" value={property.location} placeholder='Location' onChange={handleChange}></input>
          <input type='number' name="price" value={property.price} placeholder='Price' onChange={handleChange}></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Home
