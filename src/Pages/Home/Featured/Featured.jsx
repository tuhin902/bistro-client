import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white py-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-black bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Dec 02,2024</p>
          <p className="uppercase">Where can i get?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            repellendus alias amet fuga quia quisquam earum enim autem delectus
            animi asperiores libero illo cum, tempora, molestias suscipit sint
            eaque blanditiis quae dicta quod id rem ipsum! Ratione fuga id
            incidunt aliquid iusto perferendis officiis, ipsam ab eum quasi
            minus soluta.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
