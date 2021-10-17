import React, { useRef } from "react"
import Seo from "../components/Seo"
import emailjs from "emailjs-com"
// import { StaticImage } from "gatsby-plugin-image"

const Contact = () => {
  const form = useRef()

  const sendEmail = event => {
    event.preventDefault()

    emailjs
      .sendForm(
        "service_fx6illa",
        "template_wzgwu2l",
        form.current,
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
      <section className="contact-page">
        <div className="form-wrapper">
          <div className="form-img">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
            <label for="from_name">Name and surname</label>
              <input
                type="text"
                name="from_name"
                // placeholder="name"
                className="form-control"
              />
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                // placeholder="email"
                className="form-control"
              />
              <label for="massage">Please enter your massage</label>
              <textarea
                name="message"
                rows="5"
                // placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <div className="wrapper-btn">
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
            </div>
          </form>
        </article>
        </div>
        </div>
        {/* <StaticImage
        src="../assets/images/reading1.svg"
        alt="portfolio"
        className="contact-img"
        placeholder="blurred"
      /> */}
      </section>
     
    </>
  )
}

export default Contact

// const Contact = () => {

//   const form = useRef();

//   const sendEmail = event => {
//     event.preventDefault()

//     emailjs.sendForm(
//         "service_fx6illa",
//         "template_wzgwu2l",
//         form.current,
//         "user_Oq3qithOe5bmZ8ccdIMOT"
//       )
//       .then(
//         result => {
//           console.log(result.text)
//         },
//         error => {
//           console.log(error.text)
//         }
//       )
//     event.target.reset()
//   }

//   return (
//     <>
//       <section className="contact">

//         <div className="section-center contact-center">
//           <article className="contact-form">
//             <div className="heading">
//               <h3>get in touch</h3>
//             </div>

//             <form ref={form} onSubmit={sendEmail}>
//               <div className="form-group">

//                 <input
//                   type="text"
//                   name="from_name"
//                   // placeholder="name"
//                   className="form-control"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   // placeholder="email"
//                   className="form-control"
//                 />

//                 <textarea
//                   name="message"
//                   // placeholder="message"
//                   rows="8"
//                   className="form-control"
//                 ></textarea>
//               </div>
//               <button type="submit" className="submit-btn btn" onClick={() => console.log("tretre")}>
//                 subnit here
//               </button>
//             </form>
//           </article>
//           {/* <StaticImage
//             src="../assets/images/reading1.svg"
//             alt="portfolio"
//             className="contact-img"
//             placeholder="blurred"
//           /> */}
//         </div>

//       </section>
//     </>
//   )
// }

// export default Contact
