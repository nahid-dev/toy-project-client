import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://i.ibb.co/KNrqhSh/nik-5dg-Hxsv-J170-unsplash.jpg",
  //...
  "https://i.ibb.co/Jdr1XbB/finn-ijspeert-ONj-UYQ8-CMn-Y-unsplash.jpg",
  "https://i.ibb.co/X8PnzW8/sen-rg-P93c-Ps-VEc-unsplash.jpg",
  "https://i.ibb.co/vPwqkS3/vlad-hilitanu-1-FI2-QAYPa-Y-unsplash.jpg",
  "https://i.ibb.co/vPwqkS3/vlad-hilitanu-1-FI2-QAYPa-Y-unsplash.jpg",
  "https://i.ibb.co/zJH47zJ/daniel-k-cheung-B7-N0-Iji-IJYo-unsplash.jpg",

  "https://i.ibb.co/vPwqkS3/vlad-hilitanu-1-FI2-QAYPa-Y-unsplash.jpg",
  "https://i.ibb.co/KNrqhSh/nik-5dg-Hxsv-J170-unsplash.jpg",

  //...
];

const Gallery = () => {
  return (
    <div className="main-container my-10">
      <div className="my-10 text-center" data-aos="fade-right">
        <h2 className="md:text-4xl text-3xl font-bold mb-3">Image Gallery</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          accusamus!
        </p>
      </div>
      <ResponsiveMasonry
        style={{ margin: "10px" }}
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
      >
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <img
              data-aos="fade-up"
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
