import React from "react";
import Navbar from "../Home/Navbar.jsx";
import "../../../index.css";
import Footer from "../Home/Footer.jsx";

function OnlineConsultancy() {
  return (
    <div>
        <Navbar />
        <div className="m-10 font-sans">
          <div className="h-96 relative">
              <img className="h-full w-full" src="/onlineConsult/third.webp" alt="" />
              <div className="h-80 w-1/3 bg-green-50 absolute top-8 left-20 rounded-md">
                  <h3 className="pl-4 pr-3 pt-3 text-3xl text-gray-700">Expert Veterinary Care, Just a Click Away</h3>
                  <p className="pl-4 pr-3 pb-2 text-base">Connect with our experienced veterinarians for personalized advice and care for your beloved pets.
                     Schedule an online consultation today and ensure your pet’s 
                     health and happiness from the comfort of your home.
                  </p>
                  <button className="border-black border-1 text-black bg-green-700 p-2 w-32 ml-4">Live Chat</button>
                  <button className="border-black border-1 text-black bg-green-700 p-2 w-32 ml-4">Live Video</button>
              </div>
          </div>
          <hr className="text-black mt-4" />
          <h3 className="text-black p-2">Pricing</h3>
          <div className="flex justify-around">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-4xl p-2 text-center">$18 / mo</h4>
                  <ul className="text-black">
                    <li className="text-black ml-5">Unlimited Tele/Video Consult</li>
                    <li className="text-black ml-5">10% off on Pharamacy Products</li>
                    <li className="text-black ml-5">Dedicated Family Vet</li>
                    <li className="text-black ml-5">Complimentary First Aid kit</li>
                    <li className="text-black ml-5">Free Video Consult</li>
                  </ul>
                  <a href="#" className="btn btn-primary ml-20">Buy Now</a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-4xl p-2 text-center">$10 / mo</h4>
                  <ul className="text-black">
                    <li className="text-black ml-5">Unlimited Tele/Video Consult</li>
                    <li className="text-black ml-5">10% off on Pharamacy Products</li>
                    <li className="text-black ml-5">Dedicated Family Vet</li>
                    <li className="text-black ml-5">Complimentary First Aid kit</li>
                    <li className="text-black ml-5">Free Video Consult</li>
                  </ul>
                  <a href="#" className="btn btn-primary ml-20">Buy Now</a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-4xl p-2 text-center">$5 / mo</h4>
                  <ul className="text-black">
                    <li className="text-black ml-5">Unlimited Tele/Video Consult</li>
                    <li className="text-black ml-5">10% off on Pharamacy Products</li>
                    <li className="text-black ml-5">Dedicated Family Vet</li>
                    <li className="text-black ml-5">Complimentary First Aid kit</li>
                    <li className="text-black ml-5">Free Video Consult</li>
                  </ul>
                  <a href="#" className="btn btn-primary ml-20">Buy now</a>
                </div>
              </div>
          </div>
          <h3 className="pt-10 pb-4">Our Top Vet Experts</h3>
          <div className="flex justify-around">
            <div className="card">
              <img className="card-img-top" src="/onlineConsult/doctors/doctor1.avif" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Dr. Angela Yu</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/onlineConsult/doctors/doctor2.avif" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Dr. Vakashi Vastha</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="/onlineConsult/doctors/doctor3.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Dr. Kallur</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default OnlineConsultancy;
