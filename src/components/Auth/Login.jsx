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
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-emerald-500 rounded-full px-4 py-2 outline-none w-full"
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-emerald-500 rounded-full px-4 py-2 outline-none w-full"
          type="password"
          placeholder="Enter your password"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

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
