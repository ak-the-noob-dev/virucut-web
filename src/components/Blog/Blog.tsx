"use client";
import { BlogByTitle as BlogByTitleProp } from "@/types/blog";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "What do you want to know about UI",
      author: "Tom Hank",
      position: "Creative Director",
      coverImage: "offerings-1.png",
      authorImage: "author.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
    {
      id: 2,
      title: "All the features you want to know",
      author: "Arthur Melo",
      position: "Creative Director",
      coverImage: "offerings-2.png",
      authorImage: "author.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
    {
      id: 3,
      title: "Which services you get from Meraki UI",
      author: "Amelia Anderson",
      position: "Lead Developer",
      coverImage: "offerings-3.png",
      authorImage: "author.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
    {
      id: 4,
      title: "Which services you get from Meraki UI",
      author: "Amelia Anderson",
      position: "Lead Developer",
      coverImage: "offerings-1.png",
      authorImage: "author.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
    {
      id: 5,
      title: "Which services you get from Meraki UI",
      author: "Amelia Anderson",
      position: "Lead Developer",
      coverImage: "offerings-2.png",
      authorImage: "author.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
    },
  ];

  const handleNavigate = (title: string) => {
    return (window.location.href = "/blog/" + title);
  };
  return (
    <div className=" dark:bg-gray-900 my-10">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white font-verdana">
            Virucut Knoweldge Base
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt
            tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 font-verdana">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="hover:scale-110 p-3"
              onClick={() => handleNavigate(post.title)}
            >
              <div className="relative">
                <Image
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80 "
                  src={`${process.env.BASE_URL}/api/static/images/${post.coverImage}`}
                  alt=""
                  width={200}
                  height={200}
                />
                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                  <Image
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src={`${process.env.BASE_URL}/api/static/images/${post.authorImage}`}
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      {post.author}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.position}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h1>
              <hr className="w-32 my-6 text-blue-500" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.description}
              </p>
              <a
                href="/blog/some Title"
                className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogByTitle(props: BlogByTitleProp) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <Image
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={`${process.env.BASE_URL}/api/static/images/${props.coverImage}`}
              alt="Blog Main Image"
              width={1000}
              height={1000}
            />

            <div>
              <h1 className="max-w-lg mt-6 text-3xl font-semibold leading-tight text-gray-800 dark:text-white">
                {props.title}
              </h1>

              <div className="flex items-center mt-6">
                <Image
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={`${process.env.BASE_URL}/api/static/images/${props.authorImage}`}
                  alt="Author"
                  width={1000}
                  height={1000}
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {props.author}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {props.position}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {props.description}
              </p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <h3>Latest Blog</h3>
            {props.youMayLike &&
              props.youMayLike.map((post) => (
                <div key={post.id}>
                  <div>
                    <h3 className="text-blue-500 capitalize">{post.title}</h3>
                    <a
                      href="#"
                      className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                    >
                      {post.description}
                    </a>
                  </div>

                  <hr className="my-6 border-gray-200 dark:border-gray-700" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
