import ImageGallery from "./components/ImageGallery"

function App() {
  
  const images = [
    {
      id:"01",
      url: '/public/image15.jpg',
    },
    {
      id:"02",
      url: '/public/image16.png',
    },
    {
      id:"03",
      url: '/public/image-3.webp',
    },
    {
      id:"04",
      url: '/public/image-4.webp',
    },
    {
      id:"05",
      url: '/public/image-5.webp',
    },
    {
      id:"06",
      url: '/public/image-6.webp',
    },
    {
      id:"07",
      url: '/public/image-7.webp',
    },
    {
      id:"08",
      url: '/public/image-8.webp',
    },
    {
      id:"09",
      url: '/public/image-9.webp',
    },
    {
      id:"11",
      url: '/public/image-10.jpeg',
    },
    {
      id:"12",
      url: '/public/image-11.jpeg',
    },
  ];
  return (
    <>
      <ImageGallery images={images}></ImageGallery>
    </>
  )
}

export default App
