import React, { useState} from "react";
import application from "./firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import './ContactForm1.css';


const db = getFirestore(application);

const ContactForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      const updatedList = [...submittedData, formData];
      setSubmittedData(updatedList);
      console.log("Submitted Data:", updatedList);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="B-8">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="B-9">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" className="form-control" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm1;

