import React from 'react'

const Profile = () => {

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
  const EscortServiceCard = ({ id, image, number, location }) => {
    const cardStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <div className="w-full md:w-1/2 lg:w-[250px] mb-4 bg-halfWhite">
        <div className="bg-white overflow-hidden shadow-md h-[300px] border border-yellwo rounded" style={cardStyle}>
          <div className="p-2 h-[100px] bg-secondary mt-[85%] bg-opacity-60 flex flex-col items-center cursor-pointer hover:bg-opacity-80">
            <p className="text-[18px] text-white mb-2">{location} {number}</p>
            <p className="text-[10px] text-white mb-2">Dubai Model Town , Hong Kong </p>
            <p className="text-[10px] text-white mb-2">Dubai Model Town , Hong Kong </p>
          </div>
        </div>
      </div>
    );
  };
  return (

    <>


      <div className='w-full h-full'>
        <div className="w-[100%] py-2 px-4 ">
          <div className='flex justify-center py-2'>
   
            <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
              <p className='text-[18px]'>My Favorite Escorts</p>
            </button>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {escort.map((escort) => (
              <EscortServiceCard key={escort.id} {...escort} />
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile