import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">Page Not Found</p>
        <Link to="/" className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
