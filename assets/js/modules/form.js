/* ==========================================================================
   MODULE - FORM HANDLING
   Handles contact form submission
   ========================================================================== */

export function initFormHandler() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();

        // TODO: Implement actual form submission
        // Example with fetch API:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     alert('Message sent successfully!');
        //     contactForm.reset();
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     alert('Failed to send message. Please try again.');
        // });
    });
}
