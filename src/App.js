import SkeletonLoader from "./components/SkeletonLoader";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loadingState, setLoadingState] = useState(false);
  const [imageType, setImageType] = useState("rectangle");

  //displaying the content after showing the loader for 2ms
  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  });

  //handling the selection of type of image
  const handleChange = (event) => {
    setImageType(event.target.value);
    setLoadingState(false);
  };

  const cardBlockData = () => {
    if (loadingState) {
      return (
        <div className="card">
          <div
            className={`cardImage ${
              imageType === "rectangle" ? "rectangle" : "circle"
            }`}
          >
            This is an image.
          </div>
          <div className="cardSkeletonTitle">
            <div className="cardSkeletonText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </div>
            <div className="cardSkeletonText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <div className="cardSkeletonText">
              Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy
              text.{" "}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cardSkeleton">
          <div className="cardSkeletonImage">
            <SkeletonLoader
              width={imageType === "rectangle" ? "60%" : "400px"}
              height="400px"
              type={imageType}
            />
          </div>
          <div className="cardSkeletonTitle">
            <SkeletonLoader width="100%" height="50px" />
            <SkeletonLoader width="100%" height="50px" />
            <SkeletonLoader width="50%" height="50px" />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Skeleton Loader using ReactJs</h1>
      <div className="dropdown">
        <label for="typeOfImage">Choose the type of image: </label>
        <select
          name="typeOfImage"
          className="typeOfImage"
          id="typeOfImage"
          onChange={handleChange}
        >
          <option value="rectangle">Rectangular Image</option>
          <option value="circle">Circular Image</option>
        </select>
      </div>
      <div>
        <div className="cardBlock">{cardBlockData()}</div>
      </div>
    </div>
  );
}

export default App;
