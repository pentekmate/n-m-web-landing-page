import Link from 'next/link';
import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
  hashtags: string[];
  slug: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, hashtags, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="md:w-1/4 lg:w-1/6 m-4 border rounded-lg shadow-lg cursor-pointer">
      <Image src={imageSrc} alt={title} className="object-contain w-full rounded-lg" />
      <div className="p-4">
        <h1 className="text-base font-bold mt-5">{title}</h1>
        {hashtags.map((hashtag, index) => (
          <span key={index} className="bg-cyellow rounded-full p-1 m-1 text-xs">
            #{hashtag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
