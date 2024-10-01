import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { userLogin, goggleLogin } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        const newUser = {
          email,
          lastLoggedAt: result.user.metadata?.lastLoginAt,
        };
        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handlegoggleLogin = () => {
    goggleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200  min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-4">Please LogIn</h1>
        </div>
        <div className="card bg-base-100 w-full   shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
          <div className="text-center px-4 pb-8">
            <p>
              <small>
                Are you new Here?Please{" "}
                <Link to="/signUp" className="link link-primary">
                  SignUp First
                </Link>
              </small>
            </p>
            <div className="flex gap-8 justify-center py-4 mt-4 text-4xl">
              <FaGoogle onClick={handlegoggleLogin} className="text-red-600" />
              <FaFacebook className="text-[#3b5998]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
