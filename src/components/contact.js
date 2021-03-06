import React from "react"
import { useForm } from "react-hook-form"

const Contact = () => {
  const { register } = useForm()

  return (
    <section className="contact">
      <h2 className="contact__header">Get In Touch</h2>
      <p>
        My inbox is always open! Whether you have a question, want to
        collaborate on a project, or simply want to say hello, send a message
        using the form below.
      </p>
      <form
        name="contact"
        action="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="contact__form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="contact__fName">
          <label htmlFor="firstName">First Name:</label>
          <input
            required
            id="firstName"
            placeholder="Enter first name here"
            name="firstName"
            type="text"
            ref={register}
          />
        </div>
        <div className="contact__lName">
          <label htmlFor="lastName">Last Name::</label>
          <input
            required
            id="lasstName"
            placeholder="Enter last name here"
            name="lastName"
            type="text"
            ref={register}
          />
        </div>
        <div className="contact__email">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            placeholder="Enter email here"
            name="email"
            type="email"
            ref={register}
          />
        </div>
        <div className="contact__message">
          <label htmlFor="message">Message:</label>
          <textarea
            required
            id="message"
            placeholder="Enter message here"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <input className="contact__submit" type="submit" value="Send Message" />
      </form>
    </section>
  )
}

export default Contact
