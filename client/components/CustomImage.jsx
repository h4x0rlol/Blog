import Image from "next/image";

const CustomImage = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

CustomImage.defaultProps = {
  alt: "",
  width: 610,
  height: 270,
};

export default CustomImage;
