import ImageGallery from "./components/ImageGallery"

function App() {
  
  const images = [
    {
      id:"01",
      url: 'https://i.ibb.co/YPCc8fv/image-1.webp',
    },
    {
      id:"02",
      url: 'https://i.ibb.co/qJCy5vs/image-2.webp',
    },
    {
      id:"03",
      url: 'https://i.ibb.co/dDq9vDn/image-3.webp',
    },
    {
      id:"04",
      url: 'https://i.ibb.co/svcxG3s/image-4.webp',
    },
    {
      id:"05",
      url: 'https://i.ibb.co/zb4szRG/image-5.webp',
    },
    {
      id:"06",
      url: 'https://i.ibb.co/VwTbPKn/image-6.webp',
    },
    {
      id:"07",
      url: 'https://i.ibb.co/N1s4mV1/image-7.webp',
    },
    {
      id:"08",
      url: 'https://i.ibb.co/TmZc1Vw/image-8.webp',
    },
    {
      id:"09",
      url: 'https://i.ibb.co/cNGV405/image-9.webp',
    },
    {
      id:"10",
      url: 'https://i.ibb.co/bB0vTzx/image-10.jpgs',
    },
    {
      id:"11",
      url: 'https://i.ibb.co/ThRSD5R/image-11.jpg',
    },
  ];
  return (
    <>
      <ImageGallery images={images}></ImageGallery>
    </>
  )
}

export default App
