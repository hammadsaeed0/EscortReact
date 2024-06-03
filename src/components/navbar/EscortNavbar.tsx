import { Link } from "react-router-dom";

function EscortNavbar() {
  
const handleLogout = () => {

  localStorage.removeItem('isLoggedIn'); 

};
  return (
    <nav className="bg-pink flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex space-x-10">
          <Link to="/escortProfile" className="text-white font-medium text-[18px] hover:text-black">
            View My Profile
          </Link>
          <Link to="/escortEditProfile" className="text-white font-medium text-[18px] hover:text-black">
            Edit My Profile
          </Link>
          {/* <Link to="/escortVerifyProfile" className="text-white font-medium text-[18px] hover:text-black">
            Verified Status
          </Link> */}
          <Link to="/escortPremium" className="text-white font-medium text-[18px] hover:text-black">
            Buy Premium
          </Link>
          <Link to="/" onClick={handleLogout} className="text-white font-medium text-[18px] hover:text-black">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default EscortNavbar;
