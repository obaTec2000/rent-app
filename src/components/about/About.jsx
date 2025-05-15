import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>We make finding and renting spaces simple, secure, and stress-free. Whether you're looking for a cozy apartment, a spacious event venue, or professional equipment, we connect you with trusted providers to meet your exact needs. Our platform is built with your convenience in mind, offering seamless browsing, transparent pricing, and quick booking features.</p>

            <p>We are committed to providing a reliable renting experience by ensuring every listing is verified and every renter is supported throughout the process. With a growing network of quality listings and dedicated customer service, [YourWebsiteName] is your go-to destination for smart and secure rentals—anytime, anywhere.</p>

            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
