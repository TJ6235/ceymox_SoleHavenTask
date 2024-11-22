import React from 'react'
import '../App.css'
import Header from '../Components/Header';
import PairDiscover from '../Components/PairDiscover'
import BrandLogos from '../Components/BrandLogos'
import ShoeCardsCategory from '../Components/ShoeCardsCategory';
import MoreShoeCards from '../Components/MoreShoeCards';
import Stepper from '../Components/Stepper';
import CustomerCardCrsl from '../Components/CustomerCardCrsl';
import TalkShoes from '../Components/TalkShoes';
import Footer from '../Components/Footer';


function Landingpage() {
  return (
    <div>
        <div id='navAndFirstSecWrapper' className="row">
        <div className="col-md-1"></div>
        <div   className="col-md-10">
            {/* navbar start */}
           <Header/>  
            {/* navbarend */}
            {/* discoverpair wrapper start */}
             <PairDiscover/>
            {/* discoverpair wrapper end */}
</div>
        <div className="col-md-1"></div>
      </div>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          {/* brandlogo wrapper start */}
       <BrandLogos/>
  {/* brandlogo wrapper end */}
  <section>
    <div className="row mt-5">
      <h1  className="findFit fw-bold text-center mt-5">Find Your Fit Find Your Style</h1>
      <h5  className="browseShoe text-center">Browse shoes by category and discover the perfect match for your </h5>
      <h5 id='personality' className="browseShoe text-center">Personality </h5>
    </div>
  </section>
  {/* shoecard Wrapper start*/}
       <ShoeCardsCategory/>
     {/* shoecard wrapper end */}
      <div className="row mt-5 d-flex justify-content-center align-items-center">
        <button id="moreCategoryBtn" className="btn shadow text-center">View More Category</button>
      </div>
      {/* stay ahed wrapper start */}
      <div className="row mt-5">
      <h1  className="stayAhead fw-bold text-center mt-3">Stay Ahead of the Curve </h1>
      <h5  className="firstStepArrival text-center">Be The First to Step into the latest shoe trends with our newest </h5>
      <h5 id='arrival' className="firstStepArrival text-center">arrivals </h5>
      </div>
      {/* more shoe cards wrapper start */}
       <MoreShoeCards/>
      {/* more shoe card second row end */}
        {/* stepper start */}
        <Stepper/>
        {/* stepper end  */}
         <div className="row mt-5">
         <h1 className="stayAhead fw-bold text-center mt-5">Walk in Their Shoes - Customer </h1>
          <h1  className="stayAhead fw-bold text-center">Stories</h1>
          <h5  className="firstStepArrival text-center">See What our customers have to say about their Sole  Haven </h5>
          <h5  className="firstStepArrival text-center">experience </h5>
         </div>
         {/* caurossel start */}
         <CustomerCardCrsl/>
         {/* caurosselend */}
         {/* send Message Section Start */}
          <TalkShoes/>
         {/* send Message Section end */}
        </div>
        <div className="col-md-1"></div>
      </div>
      {/* footer content */}
      <div className='mt-5'>
      <Footer/>
      </div>
    </div>
  )
}

export default Landingpage