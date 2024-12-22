import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    conEmail: "",
    conPhone: "",
    conSubject: "",
    conCompany: "",
    conMessage: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactUs = (e: any) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.conEmail ||
      !formData.conPhone ||
      !formData.conSubject ||
      !formData.conCompany ||
      !formData.conMessage
    ) {
      alert("All fields are required!");
      return;
    }
    console.log("Submit Data ", formData);
  };
  // console.log(formData);
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact_content">
              <div className="section_title">
                <h6 className="subtitle">Lets Talk for Quote</h6>
                <h2 className="title">
                  Arfa a project in Mind Contact With Us
                </h2>
                <div className="desc">
                  The Digiwize is Most Powerful Incredible Popular WordPress
                  Theme With Many Features & Offers You Need.
                </div>
              </div>

              <div className="contact_address">
                <div className="icon">
                  <i className="flaticon-maps-and-flags"></i>
                </div>
                <div className="content">
                  <h5 className="label">Address</h5>
                  <address>7515 Carriage Court, Coachella, CA</address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_form">
              <form onSubmit={handleContactUs}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input_group">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Your name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_group">
                      <input
                        type="email"
                        name="conEmail"
                        id="conEmail"
                        placeholder="Email address"
                        value={formData.conEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_group">
                      <input
                        type="tel"
                        name="conPhone"
                        id="conPhone"
                        placeholder="Phone number"
                        value={formData.conPhone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_group">
                      <input
                        type="text"
                        name="conSubject"
                        id="conSubject"
                        placeholder="Subject"
                        value={formData.conSubject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input_group">
                      <input
                        type="text"
                        name="conCompany"
                        id="conCompany"
                        placeholder="Your company name"
                        value={formData.conCompany}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input_group">
                      <textarea
                        name="conMessage"
                        id="conMessage"
                        placeholder="Write your question here"
                        value={formData.conMessage}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input_button">
                      <button className="ts-btn form-btn" type="submit">
                        <span>Send a message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="message_sent" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header alert-success">
              <h5 className="modal-title">Message Sent Successfully</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Thank you for contacting us. We will get back to you shortly.
                <br />
                Have a great day!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="message_fail" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header alert-danger">
              <h5 className="modal-title">Error</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Oops! Something went wrong, please try again.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
