import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ImageComponent({
  src,
  alt,
  fit,
  height,
  borderRadius,
}: {
  src: string;
  alt: string;
  fit?: string;
  height?: string;
  borderRadius?: string;
}) {
  const obj: any = {
    height: height ? height : "",
    objectFit: fit ? fit : "cover",
    borderRadius: borderRadius ? borderRadius : "",
  };
  return (
    <>
      <LazyLoadImage
        alt={alt}
        className="gallery-img"
        effect="blur"
        placeholderSrc="/logo-green.png"
        src={src}
        width="100%"
        style={obj}
      />
    </>
  );
}
