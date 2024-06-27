import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit form
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password
    };

    // Send a POST request to the server
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signed up successfully", { duration: 1500 });
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 1500);
        }
      }).catch((err) => {
        if (err.response) {
          toast.error(`Signup failed. ${err.response.data.message}.`, { duration: 2000 });
        }
      });
  };

  return (
    <>
      <div>
        <div id="signup_modal" className="flex h-screen items-center justify-center  dark:bg-slate-900 dark:border dark:text-white">
          <div className="w-[450px] border-[2px] shadow-md p-5 rounded-md">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:border dark:text-white"
                  placeholder="Enter your full name"
                  type="text"
                  {...register("fullName", { required: true })} />
                <br />
                {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:border dark:text-white"
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
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:border dark:text-white"
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
