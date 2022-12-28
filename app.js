import React, { useState } from "react";

function Form() {
  // State variables to store the form values
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState('');                   // +++++++++++++++++++
  const [familyMembers, setFamilyMembers] = useState(0);
  const [testResult, setTestResult] = useState("");
  const [description, setDescription] = useState("");

  
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords.latitude + ',' + position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };



  const handleImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera';
    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      // Do something with the image file, such as display it or send it to an API
      setImage(file);
    });
    input.click();
  };
  
  
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation and submission logic goes here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />

      {/* Use the browser's geolocation API to get the current location */}
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        readOnly
      />
      <button onClick={handleLocation}>
        Get current location
      </button>
      <br />

      <label htmlFor="image">Image:</label>
      <input
        type="image"
        id="image"
        value={image}
        onChange={(event) => setLocation(event.target.value)}
        readOnly
      />
      <button onClick={handleImage}>
        Get Image
      </button>
      <br />



      <label htmlFor="familyMembers">Number of family members:</label>
      <input
        type="number"
        id="familyMembers"
        value={familyMembers}
        onChange={(event) => setFamilyMembers(event.target.value)}
      />
      <br />

      <label htmlFor="testResult">Test result:</label>
      <select
        id="testResult"
        value={testResult}
        onChange={(event) => setTestResult(event.target.value)}
      >
        <option value="">Select one</option>
        <option value="positive">Positive</option>
        <option value="negative">Negative</option>
      </select>
      <br />

      <label htmlFor="description">Optional description (200 character limit):</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        maxLength={200}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
