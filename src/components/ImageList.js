import "../css/ImageList.css";

import ImageCard from "./ImageCard";


const ImageList = (props) => {

  const photos = props.photos.map((image) => {

    return <ImageCard key={image.id} image={image} />;
  })

  return(
    <div className="image-unsplash-list">
      {photos}
    </div>
  );
}

export default ImageList;
