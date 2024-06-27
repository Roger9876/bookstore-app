import { useEffect } from "react";
import Books from "../components/Books"

const ExplorePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Books />
      </div>
    </>
  )
}

export default ExplorePage
