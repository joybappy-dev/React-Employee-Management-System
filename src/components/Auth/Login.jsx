import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      console.log(email, password);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="border-2 border-emerald-500 p-8 sm:p-12 rounded-xl space-y-4 w-full max-w-sm"
      >
        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-emerald-500 rounded-full px-4 py-2 outline-none w-full"
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-emerald-500 rounded-full px-4 py-2 outline-none w-full"
          type="password"
          placeholder="Enter your password"
        />

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            error ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-red-500 text-sm ml-1">{error}</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-500 w-full mt-6 rounded-full py-2 px-4 font-bold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
