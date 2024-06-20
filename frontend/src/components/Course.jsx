import list from '../assets/list.json'
import Card from './Card'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-32 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you{" "}
            <span className='text-pink-500'>Here!</span>
          </h1>
          <p className='mt-8'>
            We have a wide range of courses available for you to choose from.
          </p>
          <Link to={'/'}>
            <button
              className='mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mr-12 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course