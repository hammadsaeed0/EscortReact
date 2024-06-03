import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MainSlider = () => {
    const AfroStyles = [
        {
            id: 1,
            src: "https://media.licdn.com/dms/image/C5622AQGny6X6Quon5A/feedshare-shrink_2048_1536/0/1622303535681?e=2147483647&v=beta&t=vlZxK_eoglclWU6ATfCGbpKAUeiTiqwsuPnc-NRL3pk",
            alt: "Image 1",
            title: "Title 1",
            description: "Description for item 1",
        },
        {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pr-6J2kKbfR5rjsQTTjBYlg8h1q5jKEfgRNfywcDIw&s",
            alt: "Image 2",
            title: "Title 2",
            description: "Description for item 2",
        },
        {
            id: 3,
            src: "https://qph.cf2.quoracdn.net/main-qimg-ce2d732d54d0b1b0a81cd73ca1486589-lq",
            alt: "Image 3",
            title: "Title 3",
            description: "Description for item 3",
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylW7MfucwmF9SqGFtXLvpv7_GwCBO3pMWza5OY6OLYA&s",
            alt: "Image 3",
            title: "Title 3",
            description: "Description for item 3",
        },
        {
            id: 3,
            src: "https://cdn-ak.f.st-hatena.com/images/fotolife/a/aliraza1234/20200206/20200206220302.jpg",
            alt: "Image 3",
            title: "Title 3",
            description: "Description for item 3",
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Nno_Ce1iEvyUOXO1SNh-UXli_XkNfgvUpCqq7Tox3Q&s",
            alt: "Image 3",
            title: "Title 3",
            description: "Description for item 3",
        },
    ];

    const settings = {
        dots: false,
        arrow: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "98%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "5px", zIndex: 1000 }}
                onClick={onClick}
            />
        );
    }

    return (
        <div
            style={{
                width: "100%",
                borderColor: "white",
                backgroundImage:
                    'url("https://img.freepik.com/free-vector/gradient-hot-pink-background_23-2150837382.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714348800&semt=ais")',
                paddingTop: "10px",
            }}
        >
            <Slider {...settings}>
                {AfroStyles.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            width: "400px",
                            aspectRatio: "1/1",
                            outlineColor: "red",
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                height: "280px",
                                width: "200px",
                                borderRadius: 5,
                                position: "relative",
                                display: "flex",
                                flexWrap: "wrap",
                            }}
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${item.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    color: "white",
                                    width: "100%",
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    backgroundColor: "rgba(227, 61, 148, 0.7)",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}
                            >
                                
                                <h2 style={{ fontWeight: 'bold', fontSize: 18 }}>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainSlider;
