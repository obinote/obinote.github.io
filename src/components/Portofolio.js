/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import images from "./../assets/images";

const Portofolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            {/* end portfolio */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-dark text-center">Portfolio</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-value ali justify-content-center">
                    <div className="col-sm-4 ">
                        <img
                            src={images.portfolio_1}
                            style={{ height: "15rem" }}
                            className="img-fluid img-thumbnail"
                            alt="portofolio 1"
                        />
                    </div>
                    <div className="col-sm-4">
                        <img
                            src={images.portfolio_2}
                            style={{ height: "15rem" }}
                            className="img-fluid img-thumbnail"
                            alt="portofolio 2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portofolio;
