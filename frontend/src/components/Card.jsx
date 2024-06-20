import { useState } from "react";

const Card = ({ item }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = item.description;
  if (!showFullDescription && description.length > 40) {
    description = description.substring(0, 40) + "...";
  }

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:border dark:text-white">
          <figure><img src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{ item.price === 0 ? "Free" : "Paid"}</div>
            </h2>
            <p>{description}</p>
            <button
              onClick={() => setShowFullDescription((prevState) => !prevState)}
              className="text-gray-500 text-right">
              {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{item.category}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card