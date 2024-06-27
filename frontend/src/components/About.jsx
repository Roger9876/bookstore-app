import { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [authUser, setAuthUser] = useAuth(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userName = authUser ? authUser.fullName : '';

  console.log(authUser);

  return (
    <div className='min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 py-32'>
      <h3 className="font-bold text-4xl">About</h3>
      <br />
      <p>Welcome to our bookstore app! We are dedicated to providing a wide range of books for all readers.</p>
      <br />
      <p>Our mission is to promote literacy and a love for reading by offering a diverse selection of books across various genres.</p>
      <br />
      <p>At our bookstore, you can find bestsellers, classics, children books, and much more.</p>
      <br />
      {userName && <p>Thank you for being a valued customer <span className="text-pink-500 font-bold text-2xl">{userName.toUpperCase()}!</span> </p>}
    </div>
  );
}

export default About;
