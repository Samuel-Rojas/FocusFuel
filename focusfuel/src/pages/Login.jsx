import {useState} from "react";
import { useNavigate } from "react-router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password){
        setError("Please fill in all the fields");
        return;
    }

    setError("");
    setIsLoading(true);

    try {
        console.log("Email:", email, "Password:", password);
    } catch (err){
        setError("Login failed, Please try again.");
    } finally {
        setIsLoading(false);
        setEmail("");
        setPassword("");
        navigate('/dashboard');
    }
  };

  return (
    <div className="border-2 flex justify-center items-center flex-col h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="border-2 p-8 flex justify-center items-center flex-col bg-white rounded shadow-md"
        style={{ width: "90%", maxWidth: "400px" }}
      >
        <h2 className="text-2xl mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <label className="self-start mb-1">Email</label>
        <input
          type="email"
          className="border-2 p-2 mb-4 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="self-start mb-1">Password</label>
        <input
          type="password"
          className="border-2 p-2 mb-4 w-full"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Next"}
        </button>
        <a href="/forgot-password" className="text-sm mt-4">
          Forgot password?
        </a>
        <div className="w-full flex justify-around mt-6">
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded"
          >
            Google
          </button>
          <button
            type="button"
            className="bg-gray-800 text-white p-2 rounded"
          >
            Github
          </button>
        </div>
      </form>
    </div>
  );
}
