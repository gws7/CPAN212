import { useState } from "react";
import "./AppStyles.css";

const App = () => {
  // State for handling file uploads and display
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [message, setMessage] = useState("");
  const [displayDogImage, setDisplayDogImage] = useState("");

  // Handle file selection
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // Fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // Upload a single file
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);

      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Fetch multiple images
  const fetchMultipleFiles = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/multiple`);
      const data = await response.json();

      const filePromises = data.map(async (filename) => {
        const fileResponse = await fetch(`http://localhost:8000/fetch/file/${filename}`);
        const fileBlob = await fileResponse.blob();
        return URL.createObjectURL(fileBlob);
      });

      const imageUrls = await Promise.all(filePromises);
      setDisplayImages(imageUrls);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch a random dog image
  const fetchDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await response.json();
      setDisplayDogImage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // Save the fetched dog image
  const saveDogImage = async () => {
    try {
      const fileResponse = await fetch(displayDogImage);
      const blob = await fileResponse.blob();

      const formData = new FormData();
      formData.append("file", blob, "dog-img.jpg");

      await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      setMessage("Dog image saved successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <p className="message">{message}</p>

      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div className="image-container">
          <h3>Single File</h3>
          <img src={displayImage} alt="Display Image" />
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmitSingleFile}>
          <h2>Upload Single File</h2>
          <input type="file" onChange={handleSingleFileChange} />
          <button type="submit">Upload Single File</button>
        </form>
      </div>

      <button onClick={fetchMultipleFiles}>Fetch Multiple Files</button>
      <div className="image-gallery">
        {displayImages.length > 0 ? (
          displayImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))
        ) : (
          <p>No Images Available</p>
        )}
      </div>

      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {displayDogImage && (
        <div className="image-container">
          <img src={displayDogImage} alt="Dog" />
          <button onClick={saveDogImage}>Save Dog Image</button>
        </div>
      )}
    </div>
  );
};

export default App;
