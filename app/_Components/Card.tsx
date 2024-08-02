import Image from "next/image";
import PropTypes from "prop-types";

interface CardProps {
  title: string;
  imageSrc: string;
  hashtags: string[];
}

const Card: React.FC<CardProps> = ({ title, imageSrc, hashtags }) => {
  return (
    <div className="w-1/6 m-4 border rounded-lg shadow-lg">
      <Image src={imageSrc} alt="logo" className="object-contain w-full rounded-lg" />
      <div className="p-4">
        <h1 className="text-base font-bold mt-5">{title}</h1>
        {hashtags.map((hashtag, index) => (
          <span key={index} className="bg-cyellow rounded-full p-1 m-1 text-xs">
            #{hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
