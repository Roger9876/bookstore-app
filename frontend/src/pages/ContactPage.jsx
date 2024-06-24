import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='max-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='py-32 flex items-center justify-center'>
          <div className="text-left">
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className="w-96 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your full name"
                  type="text"
                  {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  className="w-96 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea maxLength={500}
                  className="w-96 h-40 px-3 py-1 border rounded-md outline-none"
                  placeholder="Type your message here"
                  {...register("message", { required: true })} />
                <br />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Button */}
              <div className="flex justify-start mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage