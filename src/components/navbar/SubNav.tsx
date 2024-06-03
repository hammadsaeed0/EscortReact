function SubNavbar() {
  return (
    <nav className="bg-pink flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex space-x-10">
          <a href="#" className="text-white font-medium text-[18px] hover:text-black">
            My Favorite
          </a>
          <a href="#" className="text-white font-medium text-[18px] hover:text-black">
            Edit My Profile
          </a>
          <a href="#" className="text-white font-medium text-[18px] hover:text-black">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;
