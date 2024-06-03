import React from "react";

const SecondBody = () => {
    const qaData = [
        {
            question:
                "Independent Russian Escorts in Dubai 5* Star Hotels | Hire Personal Foreigner Call Girls",
            answer:
                "Welcome to our Dubai Russian escorts service. There is no surprise if you hire your personal foreigner escort to full fill your sexual desires and needs. Now the question is what type of adult services are you looking for from Russian escorts in Dubai 5-star hotels. For your knowledge our independent Russian call girls are all set to blow your mind and say emotions as well through role play, striptease, massages, erotic dance, etc. They are well educated, mature, and have frank behavior. They are the best female companion partners all around Dubai.",
        },
        {
            question: "What Services Do Russian Escorts in Dubai Offer?",
            answer:
                "If you would like personal Russian call girls in Dubai will make your night life beautiful and speechless, you take her for a long drive from Dubai to any other places. You can also go for a dinner date with her in 5 star hotels of Dubai to enjoy a laziz foods and recipes. They are a perfect dessert treat you would like to have after a heavy dose of the working day. Not only for making love to you in different ways, our foreigner escorts are also perfect for a companion on those times when you find yourself alone in Dubai, they will make you feel alive and excited for many crazy things to do.",
        },
        {
            question: "How Many Russian Escorts Are Available in Dubai?",
            answer:
                "We have top 100+ Russian escorts in Dubai luxury 5* hotels for your service. Just because we aim to satisfy your needs according to your wish within the best price you could find. We also offer you Uzbekistan, Belarus, Kazakhstan hot girls, if you want them to hire tell us.",
        },
        {
            question: "Why Choose Russian Escorts in Dubai?",
            answer:
                "Our top 100 Russian escorts in Dubai are breathtaking and extremely gorgeous. They maintain their body figure in perfect tone that can make anyone feel like angels on earth. Russian girls have exotic walking moves. It will make you desperate to have them in your behind for a whole day.",
        },
    ];
    const gridItems = [
        { text: "Grid Item 1" },
        { text: "Grid Item 2" },
        { text: "Grid Item 3" },
        { text: "Grid Item 4" },
        { text: "Grid Item 5" },
        { text: "Grid Item 6" },
        { text: "Grid Item 7" },
        { text: "Grid Item 8" },
        { text: "Grid Item 9" },
    ];

    return (
        <div className=" mx-auto  p-5 bg-halfWhite">
            {/* <div className="flex flex-col space-y-4">
                {qaData.map((item, index) => (
                    <div key={index}>
                        <div className="font-bold text-black text-[22px] py-3">
                            {item.question}
                        </div>
                        <div className="text-gray-600">{item.answer}</div>
                    </div>
                ))}
            </div> */}
            <div className=" py-4 mx-auto p-0">
                {/* Grid container */}
                {/* <div className="font-bold text-black text-[22px] py-3">
                    <h1>5-Star Hotels Where We Serve Russian Escorts Service in Dubai for Fun & Dating</h1>
                </div> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {gridItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border-4 border-blue p-4  text-center"
                        >
                            {item.text}
                        </div>
                    ))}
                </div> */}
            </div>
            <footer className="bg-gray-800 text-white">
                <div className="mx-auto text-center bg-black">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default SecondBody;
