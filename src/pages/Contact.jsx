import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9337621567!2d80.80242503190256!3d26.848929330925085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b11ca04015%3A0x62a8e15e3b7c7c1d!2sAmbedkar%20Memorial%20Park!5e0!3m2!1sen!2sin!4v1674029504719!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xdovkdaz" method="post" className="contact-inputs">
            <input type="text" name="username" placeholder='username' required autoComplete='off' />

            <input type="email" name="email" placeholder='email' required autoComplete='off' />
            <textarea name="message" cols="30" rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>
            <input type='submit' value='send' />

          </form>
        </div>
      </div>


    </Wrapper>
  )
}

export default Contact
