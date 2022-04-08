import React from "react";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-dark">About</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-value">
                    <div className="col-sm-5 offset-sm-1">
                        <p className="text-justify">
                            Hello, my name is Ahmad Robi. I was born in Sidoarjo, 05 June 1988. I live on Dsn.
                            Babadan RT.16 RW.04 Ds. Junwangi Kec. Krian. Sidoarjo - East Java. My nationality is
                            Indonesian.
                        </p>
                    </div>
                    <div className="col-sm-5">
                        <p className="text-justify">
                            I am a Frontend Developer with more than 5 years experience using JavaScript framework. With
                            React.JS and Vue.JS used for in-company development. Looking for a technology company
                            engaged in application development and business software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
