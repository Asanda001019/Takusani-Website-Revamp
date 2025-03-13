import React from "react";

const ContactSection = () => {
  return (
    <section className="mb-32">
      {/* Map Section */}
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.2813228138843!2d28.019891275301884!3d-25.964852254268617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9570ca76feed2b%3A0x1a8fccb5a24f8bdd!2s8%20Incubation%20Dr%2C%20Riverside%20View%2C%20Midrand%2C%202021!5e1!3m2!1sen!2sza!4v1741779836203!5m2!1sen!2sza"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
