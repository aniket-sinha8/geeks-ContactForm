import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xknypgnd");

  if (state.succeeded) {
      return <p>Message Sent!</p>;
  }

  return (
    <div className='ContactForm'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='label'>
                Name
            </label>
            <br />
            <input
                id="name"
                type="text"
                name="Name"
                required
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <br />

            <label htmlFor="email" className='label'>
                Email
            </label>
            <br />
            <input
                id="email"
                type="email" 
                name="Email"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <br />
            <br />

            <label htmlFor="message" className='label'>
                Message
            </label>
            <br />
            <textarea
                id="message"
                type="text"
                name="Message"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <br />
            
            <button type="submit" disabled={state.submitting} className="btn">
                Send
            </button>
        </form>
    </div>
  );
}

export default ContactForm;