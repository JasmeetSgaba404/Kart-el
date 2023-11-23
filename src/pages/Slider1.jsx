import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from './images:vids/pixel7.webp';
import img2 from './images:vids/s23.webp';
import img3 from './images:vids/iphone15.jpg';
import img4 from './images:vids/iqoo7.avif';
import img5 from './images:vids/tecno.jpg';




function Cards() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <>



        <Slider {...settings}>
       
        {data.map((d) => (
          <div key={d.name} className="bg-white text-black rounded-xl">
            <div className='d-flex justify-content-center align-item-center'>
              <img src={d.img} alt="image" className="object-contain relative hws"/>
            </div>

            <div className="flex flex-col items-center justify-center p-5">
              <p className="fs-5 text-center">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className='bg-indigo-500 text-dark text-lg px-6 py-1 rounded-xl'></button>
            </div>
          </div>
        ))}
      </Slider>
        

     
        
        </>
    )
}



const data = [
    {
      name: `Google Pixel 7`,
      img: img1,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Samsung S23 Ultra`,
      img: img2,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Iphone 15`,
      img: img3,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Iqoo Neo 7 Pro`,
      img: img4,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Tecno Pova 5 Pro`,
      img: img5,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    
  ];


  export default Cards;