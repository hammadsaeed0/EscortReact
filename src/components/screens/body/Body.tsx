import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MainBody = () => {

  const [data, setData] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('');


  const handleSearch = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow" as RequestRedirect, // Set the correct type
    };
  
    fetch(`https://hongkongbackend.vercel.app/v1/profile?city=${selectedDistrict}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setData(data.users);
      })
      .catch((error) => console.error(error));
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  const escort = [
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-wjSUfqIkgdnIQEwqdTmUG0TexogFpjSmi31rYS4lQ&s",
      "number": "123-456-7890",
      "location": "Abu Dhabi"
    },
    {
      "id": 2,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "987-654-3210",
      "location": "Dubai"
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASDd7fBAAQk3rzA3AzSqDNHLSGUjGQuESnmMhWrXJZw&s",
      "number": "555-555-5555",
      "location": "Sharjah"
    },
    {
      "id": 4,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "111-222-3333",
      "location": "Ajman"
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvpbUAz8AK7RzXPDFOiEdJFr84pbtpAqwjGlOFcbe5A&s",
      "number": "999-888-7777",
      "location": "Ras Al Khaimah"
    },
    {
      "id": 6,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "777-777-7777",
      "location": "Fujairah"
    },
    {
      "id": 7,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "111-222-3333",
      "location": "Ajman"
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvpbUAz8AK7RzXPDFOiEdJFr84pbtpAqwjGlOFcbe5A&s",
      "number": "999-888-7777",
      "location": "Ras Al Khaimah"
    },
    {
      "id": 9,
      "image": "https://meetvipgirls.online/wp-content/uploads/2024/01/escorts-in-lahore.jpg",
      "number": "777-777-7777",
      "location": "Fujairah"
    }
  ]

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow" as RequestRedirect, // Set the correct type
    };

    fetch("https://hongkongbackend.vercel.app/v1/profile", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let data = JSON.parse(result);
        setData(data?.users);
      })
      .catch((error) => console.error(error));
  }, []);

  const EscortServiceCard = ({ _id, image, country, phone, city }) => {
    const defaultImage = "https://thumbs.dreamstime.com/b/profile-placeholder-default-avatar-girl-vector-136460496.jpg";

    const cardStyle = {
      backgroundImage: `url(${image || defaultImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <Link to={`/profile/${_id}`} className="w-full md:w-1/2 lg:w-[250px] mb-4 bg-halfWhite">
        <div className="bg-white overflow-hidden shadow-md h-[300px] border border-yellwo rounded" style={cardStyle}>
          <div className="p-2 h-[100px] bg-secondary mt-[85%] bg-opacity-60 flex flex-col items-center cursor-pointer hover:bg-opacity-80">
            <p className="text-[18px] text-white mb-2">{country} {phone}</p>
            <p className="text-[10px] text-white mb-2">{city}, {country}</p>
            <p className="text-[10px] text-white mb-2">Dubai Model Town, Hong Kong</p>
          </div>
        </div>
      </Link>
    );
  };


  return (
    <div className="flex w-[100%] ">
      {/* First section with 25% width */}


      {/* Second section with 50% width */}
      <div className="w-[100%] py-2 px-4 ">
        <div className='flex justify-between py-2'>
        <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className='text-[14px]'>All Premimum Escort</p>
          </button>
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:flex-wrap md:flex-nowrap md:space-x-2">
           
           
           
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto"
              onChange={handleDistrictChange}
              value={selectedDistrict}
            >
              <option value="">Select District</option>
              <option value="Central and Western District">Central and Western District</option>
              <option value="Eastern District">Eastern District</option>
              <option value="Southern District">Southern District</option>
              <option value="Wan Chai District">Wan Chai District</option>
              <option value="Sham Shui Po District">Sham Shui Po District</option>
              <option value="Kowloon City District">Kowloon City District</option>
              <option value="Kwun Tong District">Kwun Tong District</option>
              <option value="Wong Tai Sin District">Wong Tai Sin District</option>
              <option value="Yau Tsim Mong District">Yau Tsim Mong District</option>
              <option value="Islands District">Islands District</option>
              <option value="Kwai Tsing District">Kwai Tsing District</option>
              <option value="North District">North District</option>
              <option value="Sai Kung District">Sai Kung District</option>
              <option value="Sha Tin District">Sha Tin District</option>
              <option value="Tai Po District">Tai Po District</option>
              <option value="Tsuen Wan District">Tsuen Wan District</option>
              <option value="Tuen Mun District">Tuen Mun District</option>
              <option value="Yuen Long District">Yuen Long District</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl bg-pink w-full sm:w-auto"
            >
              Search
            </button>
          

          </div>
          

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((escort) => (
            <EscortServiceCard key={escort.id} {...escort} />
          ))}
        </div>
        {/* ----------------------------------------------------------------------- */}

      </div>

      {/* Third section with 25% width */}
      <div className="w-[15%] py-2 border border-secondary bg-black"></div>
    </div>

  )
}

export default MainBody