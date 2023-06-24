import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useState } from "react";

const Dogs = () => {
  const [dogs] = useState([
    "dog-1",
    "dog-2",
    "dog-3",
    "dog-4",
    "dog-5",
  ]);
  const [searchParam, setSearchParam] = useSearchParams();
  const dogId = searchParam.get("dogId") ?? "";

  const updateQueryString = (e) => {
    const queryParam =
      e.target.value !== "" ? { dogId: `${e.target.value}` } : {};
    setSearchParam(queryParam);
    };
    
    const location = useLocation()

  const visibleDogs = dogs.filter((dog) => dog.includes(dogId));

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />

      {visibleDogs.map((dog) => (
        <div key={dog}>
          <Link to={`${dog}`} state={{ from: location }}>
            {dog}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Dogs;
