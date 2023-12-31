import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";

const ImageGallery = ({ images }) => {
  const [imageSequence, setImageSequence] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);


  const deletImage = () =>toast("Image Deleted", { icon: "🗑️", duration: 1500 });

  //* The handleImageSelect function manages the selection and deselection of images based on their id.
  const handleImageSelect = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
      toast("Image Deselected", { icon: "❌", duration: 1500 });
      
    } else {
      setSelectedImages([...selectedImages, id]);
      toast.success(`Image Selected Successful.`, { duration: 2000 });
    }
  };




//* The setFeatureImage function create for Reorder and Set Feature Image 

  const setFeatureImage =(startIndex,endIndex)=>{
    const updatedFeatureImage = [...imageSequence];
    const [reorderFeatureImage] = updatedFeatureImage.splice(startIndex,1);
    updatedFeatureImage.splice(endIndex,0,reorderFeatureImage);
    setImageSequence(updatedFeatureImage)
  }


  //* The handleDeleteSelectedImage function create for Delet Selected Image 

  const handleDeleteSelectedImage = () => {
    setImageSequence(
      imageSequence.filter((image) => !selectedImages.includes(image.id))
    );
    setSelectedImages([]);
    deletImage();
  };

  
  return (
    <>
      <div className="px-2 container mx-auto py-5 flex-col md:flex md:flex-row justify-between">
        <h1 className="font-sans text-3xl font-bold col-span-8">
          Image Gallery
        </h1>
        <div>
          {selectedImages.length !== 0 ? (
            <div>
              <h1 className="text-base font-medium md:text-xl font-sans md:font-semibold flex gap-2 items-center pb-4">
                <BiSolidSelectMultiple className="text-sky-700"></BiSolidSelectMultiple>{" "}
                Selected Image: {selectedImages.length}
              </h1>
              <button
                onClick={handleDeleteSelectedImage}
                className="btn btn-error w-full font-bold text-white"
              >
                Delete Image
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <hr className="container mx-auto" />

      <div className=" container mx-auto py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {imageSequence.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.9 }}
            drag
            
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className={`relative ${
              image.id === imageSequence[0].id ? "col-span-2 row-span-2" : ""
            } border-2 border-gray-400 rounded-2xl group cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}
            layout
          >
            <img src={image.url} alt={image.alt} className="rounded-2xl" />
            <div
              className={`absolute ${
                selectedImages.includes(image.id) ? "translate-y-[10] " : "  "
              } bg-black bg-opacity-50 inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0`}
            >
              <input 
              type="checkbox" 
              className="absolute top-5 left-5"
              checked={selectedImages.includes(image.id)}
              onChange={() => handleImageSelect(image.id)}
               />

              <button
              onClick={() => setFeatureImage(index, 0)}
              className="absolute bottom-5 left-5 bg-gradient-to-r from-gray-900 to-gray-600  text-white p-2 text-sm font-bold rounded-lg">
                Set as Feature
              </button>
            </div>
          </motion.div>
        ))}
        <Toaster />
        <div className="w-[175px] h-[175px] md:w-[372px] md:h-[372px] lg:w-[188px] lg:h-[188px] xl:w-[290px] xl:h-[290px] border-gray-400 border-dashed rounded-2xl border-2 flex justify-center items-center cursor-pointer">
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

