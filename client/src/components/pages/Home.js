import React from 'react';
import Contact from '../contact/Contact';
import ContactForm from '../contact/ContactForm';

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
