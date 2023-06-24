import { useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

const DogDetails = () => {
    const { dogId } = useParams();
    const location = useLocation()
    // console.log(location)
    const backRef = useRef(location.state?.from ?? "/dogs");
    
    console.log(backRef);
    console.log(location);
    
  return (
    <>
      <h1>{`Dog info ${dogId}`}</h1>
      <Link to={backRef.current}>Back to the collection</Link>
      <ul>
        <li>
          <Link to="poroda">Poroda</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
