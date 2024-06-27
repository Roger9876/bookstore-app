import { useEffect } from "react";
import Banner from "../components/Banner"
import Freebook from "../components/Freebook"

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Freebook />
    </>
  )
}

export default HomePage
