const { useParams } = require("react-router-dom");

const Gallery = () => {
  const { dogId } = useParams();
  return <div>Gallery: {dogId}</div>;
};

export default Gallery
