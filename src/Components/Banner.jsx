import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container text-center" id="home">
        <div className="row py-1 border-solid">
          <div className="col pb-1">
            <h2 className="text-light">
              Mike's Portfolio <br /> Fullstack Developer
            </h2>
            <img
              src="https://media.licdn.com/dms/image/v2/C5622AQEuZSwWcbn4Xw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1597068097698?e=2147483647&v=beta&t=-DDMrmlKavklNQ1pCK8WpduyaDh0Dv-XBbaTbhUNbiA"
              alt=""
            />
          </div>
          <div className="col py-5">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1 className="text-warning">Open for collaboration</h1>
                    </div>
                    <div className="carousel-item">
                    <h1 className="text-warning">Open for work</h1>
                    </div>
                    <div className="carousel-item">
                    <h1 className="text-warning">Open for business</h1>
                    </div>
                </div>
            </div>
            <div className="row py-5">
              <div className="col-md-6 pb-1">
                <a href="https://www.linkedin.com/in/michael-patrick-54ab80231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7hu5xPGbRcKdC4yiLSChig%3D%3D" target="_blank">
                <button className="btn btn-warning p-1">
                  <img src="/LinkedIn.png" alt="" />
                </button></a>
              </div>
              <div className="col-md-6 pb-1">
                <a href="https://github.com/Giftedmike?tab=repositories" target="_blank">
                <button className="btn btn-primary p-1">
                  <img src="/github-icon-7.png" alt="" />
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
