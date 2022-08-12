import {useState, useRef, useEffect} from "react";


const ImageCard = ({image}) => {

  const [spans, setSpans] = useState(0);
  const imageRef = useRef();


  const setSpan = () => {
    const height = imageRef.current.clientHeight;
    console.log(height);
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpan);
  });

    return (
      <div className="image-unsplash-card" style={{gridRowEnd: `span ${spans}`}}>
        <img
          ref={imageRef}
          alt={image.description}
          src={image.urls.full}
          width="300px"
        />
      </div>
    );
}

export default ImageCard;
