import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [login, setLogin] = useState(false);





  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLogin(isLoggedIn);
  }, []);

  const handleRegisterClick = () => {
    navigate('/escortRegister');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/escortProfile');
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex justify-center items-center md:justify-start">
            <h1 className="text-blue text-2xl font-extrabold md:text-4xl">
              Hot Girls Hong Kong
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:space-x-10 my-4 md:my-0">
              <Link to="/" className="text-white font-medium text-[18px] sm:w-1/3 md:w-auto">
                Home
              </Link>
              <Link to="/" className="text-white font-medium text-[18px] sm:w-1/3 md:w-auto">
                Girls
              </Link>
              <Link to="/ladyboys" className="text-white font-medium text-[18px] sm:w-1/3 md:w-auto">
                Ladyboys
              </Link>
              <Link to="/blogs" className="text-white font-medium text-[18px] sm:w-1/3 md:w-auto">
                Our Blogs
              </Link>
              <Link to="/contact" className="text-white font-medium text-[18px] sm:w-1/3 md:w-auto">
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex-wrap md:flex-nowrap md:space-x-2">
             
              
              <select className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto">
                <option value="">Filter</option>
                <option value="youngest">From Neighborhood</option>
                <option value="cheapest">From Cheapest</option>
                <option value="closest">From Closest</option>
                <option value="youngest">From Youngest</option>
              </select>
              {login ? (
                <button
                  onClick={handleProfileClick}
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink w-full sm:w-auto"
                >
                  My Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleRegisterClick}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink w-full sm:w-auto"
                  >
                    Register
                  </button>
                  <button
                    onClick={handleLoginClick}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink w-full sm:w-auto"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
