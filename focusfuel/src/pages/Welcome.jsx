import { useNavigate } from "react-router";

export default function Welcome() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-5xl">FocusFuel</h1>
      <p className="mt-3">
        Helps you track focus sessions along with your mood or productivity
        rating.
      </p>
      <button onClick={handleGetStarted} className="mt-5 rounded-lg border-1 p-1.5 bg-green-500 text-white">Get Started</button>
    </div>
  );
}
