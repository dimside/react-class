import { useParams } from "react-router-dom";

const Poroda = () => {
  const { dogId } = useParams();
  return <div>Poroda: {dogId}</div>;
};

export default Poroda;
