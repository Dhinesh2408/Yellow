import React, { useState } from 'react';

const Contact = () => {
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
                alert('Your message has been sent successfully!');
                form.reset(); // Reset the form fields
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
        </section>
    );
}

export default Contact;
