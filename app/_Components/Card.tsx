import Link from "next/link";
import Image from "next/image";
import { lato, poppins } from "../_Utils/fonts";

interface CardProps {
  title: string;
  imageSrc: string;
  hashtags: string[];
  slug: string;
  text: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageSrc,
  hashtags,
  slug,
  text,
}) => {
  return (
    <div className="md:w-2/4 lg:w-2/4 border rounded-lg shadow-xl">
      <Image
        src={imageSrc}
        alt={title}
        className="object-cover object-center rounded-t-lg h-[350px] w-full"
      />
      <div className="p-4">
        <h1 className={`h1 ${poppins.className}`}>{title}</h1>
        <p className={`p1 px-4 py-4 ${lato.className}`}>{text}</p>
        <div className="px-4">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className={`bg-cyellow rounded-[7px] p-1 m-1 text-xs font-light ${poppins.className}`}
            >
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
