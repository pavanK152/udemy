import React, { useState } from "react";
import { Link } from "react-router-dom";

export const courseImages = [
  "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
  "https://img-c.udemycdn.com/course/750x422/1026604_790b_2.jpg",
  "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
  "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
  "https://img-c.udemycdn.com/course/750x422/4556488_7322_2.jpg",
  "https://img-c.udemycdn.com/course/750x422/1793828_7999.jpg",
  "https://i.ytimg.com/vi/9zq7v9s6s6s/maxresdefault.jpg",
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Ethical_Hacking_Course.jpg",
  "https://img-c.udemycdn.com/course/750x422/1708340_7108_5.jpg",
  "https://img-c.udemycdn.com/course/750x422/2120666_d701.jpg",
  "https://img-c.udemycdn.com/course/750x422/2327120_1879_3.jpg",
  "https://img-c.udemycdn.com/course/750x422/1046722_cbd7_2.jpg",
  "https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg",
  "https://img-c.udemycdn.com/course/750x422/1576854_9aeb.jpg",
  "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
  "https://img-c.udemycdn.com/course/750x422/1251344_52d3_6.jpg",
  "https://img-c.udemycdn.com/course/750x422/1086882_e587.jpg",
  "https://img-c.udemycdn.com/course/750x422/355222_691a_4.jpg",
  "https://img-c.udemycdn.com/course/750x422/2630560_05c0_4.jpg",
  "https://img-c.udemycdn.com/course/750x422/1270870_8e92_13.jpg",
];

const CourseCard = ({ courseData }) => {
  const {
    id,
    title,
    instructor,
    price,
    rating,
    category,
    bestseller,
    studentsEnrolled,
  } = courseData;
  const [img, setImg] = useState(courseData?.image ?? "");
  return (
    <Link
      to={`/course/${id}`}
      className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          onError={() => {
            const randomIdx = Math.floor(Math.random() * courseImages.length);
            setImg(courseImages[randomIdx]);
          }}
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {bestseller && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-gray-900 shadow-sm">
            Bestseller
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category */}
        <p className="text-xs font-medium text-indigo-600 mb-1">{category}</p>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-500 mb-2">{instructor}</p>

        {/* Rating Section */}
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 font-bold text-sm mr-1">
            {rating}
          </span>
          <div className="flex text-yellow-500 text-sm">
            {/* Simple SVG Star */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.53.044.75.616.384.973l-4.204 4.091a.563.563 0 00-.172.527l1.285 5.386a.562.562 0 01-.811.85l-4.664-2.833a.562.562 0 00-.594 0l-4.664 2.833a.562.562 0 01-.81-.85l1.285-5.386a.562.562 0 00-.172-.527L2.473 10.37c-.366-.357-.146-.93.384-.973l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-2">
            ({(studentsEnrolled / 1000).toFixed(1)}k)
          </span>
        </div>

        {/* Price & Spacer to push price to bottom */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
