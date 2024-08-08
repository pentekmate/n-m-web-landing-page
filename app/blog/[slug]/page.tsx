import Image from "next/image";
import Header from "../../_Components/Navigation";
import Footer from "../../_Components/Footer";
import { cardsData } from "../page";

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
      <div className="container mx-auto p-4 mb-48">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold mt-4 mb-4">{postData.title}</h1>
        </div>
        <div className="mt-4 p-4 flex flex-col items-center md:flex-row md:items-start">
          <Image
            src={postData.imageSrc}
            alt={postData.title}
            width={250}
            className="rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <p className="text-base">{postData.text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
