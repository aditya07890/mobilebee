import { login } from "../../assets";

export const LoginContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-semibold mb-6">Hi, Welcome back</h1>
      <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden w-full max-w-4xl">
        <div className="md:w-1/2 p-6 flex items-center justify-center">
          <img className="w-full h-auto" src={login} alt="Login" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-5">
              Sign in to New Electronic
            </h2>
            <p className="mb-6 text-gray-700 font-semibold text-2xl">
              New user?{" "}
              <span className="text-green-600 cursor-pointer">
                Create an account
              </span>
            </p>
            <div className="mb-4">
              <input
                className="w-full p-3 border border-gray-300 rounded-2xl mb-3"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="w-full p-3 border border-gray-300 rounded-2xl mb-3"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <p className="text-2xl cursor-pointer text-right mb-6">
              Forgot Password?
            </p>
          </div>
          <button className="bg-cyan-500 text-white h-12 w-full text-2xl rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
