import React from "react";

const Service = () => {
  return (
    <>
      <main>
        <section className="section-services">
          <div className="container grid grid-two-cols">
            <div className="services-content">
              <p>Your Trusted Partner</p>
              <h1>Our Services</h1>
              <p>
                At Thapa Technical, we offer a wide range of IT services to help
                businesses streamline their operations, improve efficiency, and
                embrace cutting-edge technology. Our team of experts is ready to
                provide custom solutions tailored to your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/about">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* Services image */}
            <div className="services-image">
              <img
                src="../../images/services.png"
                alt="IT Services"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* Additional sections */}
        <section className="section-services">
          <div className="container grid grid-two-cols">
            {/* Image */}
            <div className="services-image">
              <img
                src="/images/info.png"
                alt="Design Services"
                width="400"
                height="500"
              />
            </div>

            {/* Content */}
            <div className="services-content">
              <p>Expert Solutions</p>
              <h1>Why Choose Us</h1>
              <p>
                With our years of experience, cutting-edge solutions, and
                dedication to customer satisfaction, Thapa Technical is your
                go-to partner for all things IT. Whether you're looking for
                software development, network security, or cloud solutions, we've
                got you covered.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;
