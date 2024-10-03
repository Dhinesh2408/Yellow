/*import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/{your_form_id}" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;*/

import React, { useState } from 'react';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const form = e.target;

        // Send form data to Formspree
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setSuccessMessage('Your message has been sent successfully!');
                setShowMessage(true);
                form.reset(); // Reset the form fields

                // Hide the success message after a few seconds
                setTimeout(() => {
                    setShowMessage(false);
                }, 3000); // Adjust duration as needed
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        } catch (error) {
            alert('There was a problem with your submission. Please try again.');
        }
    };

    return (
        <section id="contact" className="section contact">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/f/{your_form_id}" method="POST" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
            {showMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
        </section>
    );
}

export default Contact;

