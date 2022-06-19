import { useState } from "react";
import { useDispatch } from "react-redux";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase"
import { addProduct } from "../../redux/apiCalls";

export default function NewProduct() {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  // const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL};
          addProduct(product, dispatch);
        });
      }
    );
  };


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Car Name" onChange={handleChange} required/>
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input name="img" type="file" id="file" required onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Car Description" required  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>InStock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input name="year" type="number" placeholder="Production Year" min="2010" max="2022" required  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Car Type</label>
          <select name="category" id="category" required  onChange={handleChange}>
            <option value="" >Select Car Type</option>
            <option value="sedan">Sedan</option>
            <option value="coupe">Coupe</option>
            <option value="hatchback">Hatchback</option>
            <option value="jeep">Jeep</option>
            <option value="sports">Sports</option>
            <option value="convertible">Convertible</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Fuel</label>
          <select name="fuel" id="fuel" required  onChange={handleChange}>
            <option value="" >Select Fuel Type</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Mileage</label>
          <input name="mileage" type="number" placeholder="Mileage (km)" min={0} required  onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Transmission</label>
          <select name="gear" id="gear" required  onChange={handleChange}>
            <option value="">Select Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Daily Price</label>
          <input name="price" type="number" min={0} placeholder="€" required  onChange={handleChange}/>
        </div>
        <button className="addProductButton" onClick={handleClick} type="submit">Create</button>
      </form>
    </div>
  );
}
