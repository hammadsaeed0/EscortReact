import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileArea = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [service, setService] = useState([])


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const url = `https://hongkongbackend.vercel.app/v1/my-profile/${id}`;
        console.log("Fetching URL:", url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.user);
        const selectedServicesArray = Object.entries(result.user.services)
          .filter(([ value]) => value)
          .map(([key]) => key);
        setService(selectedServicesArray)
      } catch (error) {
        setError(error);
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }




  const link = [
    { id: 1, name: "Abu Al Abyad Russian Escort Service" },
    { id: 2, name: "Russian Call Girls Abu Al Abyad" },
    { id: 3, name: "Abu Dhabi Airport Road Russian Escort Service" },
    { id: 4, name: "Abu Dhabi Capital District Russian Escort Service" },
    { id: 5, name: "Abu Dhabi Corniche Area Russian Escort Service" },
    { id: 6, name: "Abu Dhabi Eastern Road Russian Escort Service" },
    { id: 7, name: "Abu Dhabi Gate City Russian Escort Service" },
    { id: 8, name: "Abu Dhabi Russian Escort Service" },
    { id: 9, name: "Abu Dhabi Villa Compound Russian Escort Service" },
    { id: 10, name: "Academic City Russian Escort Service" },
    { id: 11, name: "Airport Street Russian Escort Service" },
    { id: 12, name: "Ajman Russian Escort Service" },
    { id: 13, name: "Al Adla City Russian Escort Service" },
    { id: 14, name: "Al Ain Russian Escort Service" },
  ];


  const rates = [
    { time: '1h', incall: '$150', outcall: '$200' },
  ];

  const defaultImage = "https://thumbs.dreamstime.com/b/profile-placeholder-default-avatar-girl-vector-136460496.jpg";
  const image = data?.image && defaultImage;

  return (
    <div className="flex w-[100%] bg-halfWhite">
      {/* First section with 20% width */}
      <div className="w-[20%] py-2 bg-primary">
        <h2 className="px-4 font-normal text-white text-[18px]">
          Advertisment Area
        </h2>
        {/* <ul className="px-4">
          {link.map((link) => (
            <li className="py-2" key={link.id}>
              <a href={link.name} className="text-blue text-blue-700 ">
                {link.name}
              </a>
            </li>
          ))}
        </ul> */}
      </div>

      {/* Second section with 65% width */}
      <div className="w-[65%] py-2 px-4">
        <div className="flex justify-between py-2">
          <h1 className="text-blue text-[22px] font-normal">Premium Escort</h1>
          <button className="bg-gradient-to-r from-secondary to-blue text-white px-2 py-1 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
            <p className="text-[14px]">All Premium Escort</p>
          </button>
        </div>
        <div className="w-auto">
          <div className="w-[100%] flex justify-between">
            <div className="w-64 py-2">
              <img src={data.image ? data.image : defaultImage}
                alt="Image" loading="lazy" style={{ objectFit: 'contain' }} />
            </div>
            <div className="w-[60%] py-2 flex items-center justify-center rounded-lg">
              <div className="flex flex-wrap items-center justify-center py-5 gap-4">
                <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>Name</p>
                  <p>{data?.name}</p>
                </div>
                <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>Call Me</p>
                  <p>{data?.phone}</p>
                </div>
                <div className="py-1 px-4 flex flex-col items-center justify-center font-semibold rounded-lg bg-gradient-to-r from-[#F46BA0] to-[#34C0F5] text-14 text-white">
                  <p>25</p>
                  <p>Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Her Section */}
        <div className="w-full bg-white p-5 h-[300px] rounded-md mt-4">
          <div>
            <h1 className="font-bold text-[24px] text-blue">ABOUT ME:</h1>
          </div>
          <div>
            <p className="font-bold text-[18px]">
              25 year old {data.gender} from Hong Kong Call Girls, Hong Kong Escort Service
            </p>
            <p className="text-[16px] leading-6 font-light overflow-wrap break-words">
              {data.about}
            </p>
          </div>
        </div>


        {/* Her Section */}
        <div className="w-[100%] py-2 rounded-md mt-4 flex justify-between">
          <div className="w-[49%] py-2 h-[900px] rounded-md mt-2 flex flex-col">
            {/* AVAILABILITY */}
            <div className="w-[100%] bg-white py-2 h-auto rounded-md">
              <div className="w-full py-2 flex justify-around">
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">AVAILABILITY</h1>
                  <p className="text-[18px]">{data.availability}</p>
                </div>
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">ETHNICITY</h1>
                  <p className="text-[18px]">{data.ethnicity}</p>
                </div>
              </div>
              <div className="w-full py-2 flex justify-around">
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">HAIR LENGTH</h1>
                  <p className="text-[18px]">{data.hairLength}</p>
                </div>
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">BUST SIZE</h1>
                  <p className="text-[18px]">{data.bustSize}</p>
                </div>
              </div>
              <div className="w-full py-2 flex justify-around">
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">LOOKS</h1>
                  <p className="text-[18px]">{data.look}</p>
                </div>
                <div className="w-36 h-18 font-light flex flex-col items-start justify-center">
                  <h1 className="font-bold text-[14px] text-secondary">GENDER</h1>
                  <p className="text-[18px]">{data.gender}</p>
                </div>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="w-full bg-white py-2 rounded-md mt-10 p-5">
              <h1 className="font-bold text-2xl text-blue mb-4">CONTACT INFO:</h1>
              <div className="mb-4">
                <p><span className="font-bold mr-2">Nickname:</span> {data.username}</p>
                <p><span className="font-bold mr-2">Telegram:</span> Hong Kong Escort Service</p>
                <p><span className="font-bold mr-2">Wechat:</span> <a href="https://hongkongservice.com/" className="text-blue-500 hover:underline">{data.website}</a></p>
                <p><span className="font-bold mr-2">Phone:</span> <a href="tel:+971569407105" className="text-blue-500 hover:underline">{data.phone}</a></p>
              </div>
              <button className="bg-gradient-to-r from-secondary to-blue text-white px-4 py-2 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                <p className="text-lg">Contact On Whatsapp</p>
              </button>
            </div>
          </div>

          {/* Service Section */}
          {
            service ?

              <div className=" w-[49%] mt-2 py-2 rounded-md">
                <div className=" w-[100%] bg-white py-2 rounded-md p-5">
                  <h1 className="font-bold text-[24px] text-blue ">SERVICES:</h1>
                  <div>
                    {service.map((service, index) => (
                      <div key={index} className="flex items-center py-0.5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Green_tick.png" alt="tick" className="w-4 h-4 mr-2" />
                        <p className="font-light text-[18px]">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* RATES: Section ? */}
                <div className=" w-[`100%] bg-white py-2  rounded-md  mt-10 p-5 ">
                  <h1 className="font-bold text-[24px] text-blue ">RATES:</h1>
                  <div className="flex justify-between font-bold">
                    <div className="w-1/4 "><p className="text-center text-white text-[18px]">Incall</p></div>
                    <div className="w-1/3 bg-secondary "><p className="text-center text-white text-[18px]">Incall</p></div>
                    <div className="w-1/3 bg-secondary"><p className="text-center text-white text-[18px]">Incall</p></div>
                  </div>
                  {rates.map((rate, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="w-1/4"><p className="text-center font-bold text-primary">{rate.time}</p></div>
                      <div className="w-1/3"><p className="text-center font-light text-primary">{rate.incall}</p></div>
                      <div className="w-1/3"><p className="text-center font-light text-primary">{rate.outcall}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              : null}
        </div>
      </div>

      {/* Third section with 15% width */}
      <div className="w-[15%] py-2 border border-secondary bg-black"></div>
    </div>
  );
};

export default ProfileArea;
