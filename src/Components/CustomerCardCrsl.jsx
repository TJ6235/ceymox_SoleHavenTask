import React from "react";
import ladycard from "../assets/ladyCard.jpg";
import "../App.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';




function CustomerCardCrsl() {

 const  options={
  autoplay: false,
  pauseOnHover: false,
  arrows: true,
  pagination: true, 
  gap: '1rem',
  fixedHeight: '300px', 
  breakpoints: {
      640: { 
          perPage: 1, 
          fixedHeight: '600px', 
          arrows:true,
      },
      768: { 
          perPage: 2, 
          fixedHeight: '450px', 
      },
      1024: { 
          perPage: 3, 
          fixedHeight: '400px', 
      },
  },
}
 
  return (  
    <div>
      <div className="row mt-5">
        <div id="wholecaurossel">
          <Splide  options={options} aria-label="My Favorite Images">
            <SplideSlide>
                <div className="caurosselWhole"> 
                 <div className="crslImageWrapper">
                 <img id='image' className='rounded' width={250} height={250} src={ladycard} alt=""/>
                 </div>
                 <div className="textWrapperCrsl">
                 <p className='solehavenFeedBack'>" i've been a loyal customer of Sole Haven for years now , and i can <br />
           confidently say that their shoes are the best blend of style and comfort. <br />
           i've ever worn. Whether i'm running errands or attending a formal <br />
           event, I always find the perfect pair in their collection. plus , their <br />
           customer service team is top-notch ! "
           </p>
           <div className="textsUser">
              <h3 className='fw-bold'>Mary J.</h3>
                <p className='laCA'>Los Angeles, CA</p>
              </div>
                 </div>
                </div>
            </SplideSlide>
            <SplideSlide> 

            </SplideSlide>
        </Splide>
        </div>
      </div>
    </div>
  );
}

export default CustomerCardCrsl;


