import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    // Send a POST request to the server
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in successfully", { duration: 1500 });
          document.getElementById("login_modal").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("user", JSON.stringify(res.data.user));
           }, 1500);
        }
      }).catch((err) => {
        if (err.response) {
          toast.error(`Login failed. ${err.response.data.message}.`, { duration: 2000 });
          setTimeout(() => {}, 2000);
        }
      });
  }

  return (
    <div>
      <dialog id="login_modal" className="modal" >
        <div className="modal-box dark:bg-slate-900 dark:border dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("login_modal").close()}>✕</button>
            <h3 className="font-bold tpext-lg">Login</h3>
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
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >Login</button>
              <p>Not registered?{" "}
                <Link
                  className="underline text-blue-500 cursor-pointer"
                  to={'/signup'}
                >Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login