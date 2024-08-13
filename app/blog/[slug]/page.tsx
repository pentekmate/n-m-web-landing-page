import Image from "next/image";
import Header from "../../_Components/Navigation";
import Footer from "../../_Components/Footer";
import { cardsData } from "../page";


export const metadata={
  title:'Blog'
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  // Find the post that matches the slug
  const postData = cardsData.find((post) => post.slug === params.slug);

  // If no post is found, handle it accordingly (e.g., show a 404 page)
  if (!postData) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mb-48 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold mt-4 mb-4">{postData.title}</h1>
        </div>
        <div className="mt-4 p-4 flex flex-wrap items-center justify-center md:flex-row md:items-start border bg-cyellow bg-opacity-20 drop-shadow-xl w-2/3">
          <div className="p-3 w-full items-center flex justify-center">
            <Image
              src={postData.imageSrc}
              alt={postData.title}
              width={250}
              className="rounded-lg mb-4 md:mb-0 md:mr-4 md:-translate-x-28 md:translate-y-12 z-10"
            />
          </div>
          <div className="md:translate-x-40 w-full md:w-1/3 bg-white rounded-lg p-2">
            <p className="p-4 text-base">{postData.text}</p>
            {postData.hashtags.map((hashtag, index) => (
              <span
                key={index}
                className="bg-cyellow rounded-full p-1 m-1 text-xs"
              >
                #{hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
