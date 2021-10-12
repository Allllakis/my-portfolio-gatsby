import React from "react"
import Seo from "../components/Seo"
import emailjs from "emailjs-com"
import { StaticImage } from "gatsby-plugin-image"

const contact = () => {
  const sendEmail = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        "service_fx6illa",
        "template_wzgwu2l",
        event.target,
        "user_Oq3qithOe5bmZ8ccdIMOT"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    event.target.reset()
  }

  return (
    <>
      <section className="contact">
        {/* <div className="contact"> */}
        <div className="section-center contact-center">
          
          <article className="contact-form">
            <h3>get in touch</h3>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="from_name"
                  // placeholder="name"
                  className="form-control"
                />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  // placeholder="email"
                  className="form-control"
                />
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  // placeholder="message"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn btn">
                subnit here
              </button>
            </form>
          </article>
          <StaticImage
            src="../assets/images/reading.svg"
            alt="portfolio"
            className="contact-img"
            placeholder="blurred"
          />
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default contact

//  const contact = () => {

//   const sendEmail = (event) => {
//     event.preventDefault();

//     emailjs.sendForm('service_fx6illa', 'template_wzgwu2l', event.target, 'user_Oq3qithOe5bmZ8ccdIMOT')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//      event.target.reset()
//   };

//   return (
//     <form  onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="email" />

//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default contact
