import ImageGallery from "./components/ImageGallery"

function App() {
  const images = [
    {
      id:"01",
      url: '/src/assets/image-1.webp',
    },
    {
      id:"02",
      url: '/src/assets/image-2.webp',
    },
    {
      id:"03",
      url: '/src/assets/image-3.webp',
    },
    {
      id:"04",
      url: '/src/assets/image-4.webp',
    },
    {
      id:"05",
      url: '/src/assets/image-5.webp',
    },
    {
      id:"06",
      url: '/src/assets/image-6.webp',
    },
    {
      id:"07",
      url: '/src/assets/image-7.webp',
    },
    {
      id:"08",
      url: '/src/assets/image-8.webp',
    },
    {
      id:"09",
      url: '/src/assets/image-9.webp',
    },
    {
      id:"11",
      url: '/src/assets/image-10.jpeg',
    },
    {
      id:"12",
      url: '/src/assets/image-11.jpeg',
    }
  ];
  return (
    <>
      <ImageGallery images={images}></ImageGallery>
    </>
  )
}

export default App
