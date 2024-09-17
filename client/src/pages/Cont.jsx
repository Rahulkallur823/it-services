import React from "react";

const Contact = () => {
  return (
    <>
      <main>
        <section className="section-contact">
          <div className="container grid grid-two-cols">
            <div className="contact-content">
              <p>Get in Touch</p>
              <h1>Contact Us</h1>
              <p>
                We’re here to help! Whether you have a question about our
                services, need assistance with a project, or just want to learn
                more about Thapa Technical, feel free to reach out to us. Our
                team is ready to assist you and provide the information you
                need.
              </p>
              <div className="btn btn-group">
                <a href="mailto:info@thapatechnical.com">
                  <button className="btn">Email Us</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Our Services</button>
                </a>
              </div>
            </div>

            {/* Contact image */}
            <div className="contact-image">
              <img
                src="../../images/hero.png"
                alt="Contact Thapa Technical"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* Additional sections */}
        <section className="section-contact">
          <div className="container grid grid-two-cols">
            {/* Image */}
            <div className="contact-image">
              <img
                src="/images/support.png"
                alt="Customer Support"
                width="400"
                height="500"
              />
            </div>

            {/* Content */}
            <div className="contact-content">
              <p>We're Here for You</p>
              <h1>Support & Assistance</h1>
              <p>
                Need help with our services or have technical questions? Our
                support team is available to provide the assistance you need.
                From troubleshooting issues to offering guidance, we are just an
                email or call away.
              </p>
              <div className="btn btn-group">
                <a href="tel:+123456789">
                  <button className="btn">Call Us</button>
                </a>
                <a href="/faq">
                  <button className="btn secondary-btn">FAQs</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
