import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <div id="signup_modal" className="flex h-screen items-center justify-center">
          <div className="w-[450px] border-[2px] shadow-md p-5 rounded-md">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className="w-80 px-3 py-1 border rounded-md outline-none"
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
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", { required: true })} />
                <br />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                <p>Have an account?{" "}
                  <Link className="underline text-blue-500 cursor-pointer" to={'/'}>Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup