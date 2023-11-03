import {motion} from 'framer-motion'
import { useState } from 'react';
import { BiSolidSelectMultiple } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";

const ImageGallery = ({images}) => {
    const [imageSequence, setImageSequence] = useState(images);
  return (
    <>
      <div className="px-2 container mx-auto py-5 flex-col md:flex md:flex-row justify-between">
        <h1 className="font-sans text-3xl font-bold col-span-8">
          Image Gallery
        </h1>
      </div>
      <hr className="container mx-auto" />

      <div className=" container mx-auto py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {imageSequence.map((image, index) => (
          <motion.div
            className={`relative  border-2 border-gray-400 rounded-2xl group cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}
            layout
          >
            <img src={image.url} alt={image.alt} className="rounded-2xl" />
            <div className={`absolute  bg-black bg-opacity-50 inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0`}>
             
              <input
              type="checkbox"
              className="absolute top-5 left-5"
            />

            <button
              className="absolute bottom-5 left-5 bg-gradient-to-r from-gray-900 to-gray-600  text-white p-2 text-sm font-bold rounded-lg"
            >
              Set as Feature
            </button>
            </div>
          </motion.div>
        ))}
        <div className="w-[175px] h-[175px] md:w-[290px] md:h-[290px] border-gray-400 border-dashed rounded-2xl border-2 flex justify-center items-center cursor-pointer">
          <div>
            <span className="flex justify-center">
              <BsFillImageFill className="w-10 h-10"></BsFillImageFill>
            </span>
            <h1 className="text-2xl font-bold ">Add Images</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
