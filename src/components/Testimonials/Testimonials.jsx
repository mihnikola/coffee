import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Jane Geller",
    text: "The best cup of coffee I've ever had! The rich, bold flavor and smooth finish made my morning so much better. I can tell this coffee is made with the finest beans. It's my new daily go-to.",
    img: "https://fastly.picsum.photos/id/823/5000/3333.jpg?hmac=75sjFAfvXxelfFDFdlupCl2KDgIbyOOBTmvhcr6u0B8",
  },
  {
    id: 2,
    name: "Nick Jones",
    text: "I’m a coffee enthusiast, and this brew did not disappoint! It’s perfectly balanced, with just the right amount of strength. Whether it’s a quiet morning or a busy afternoon, it never lets me down.",
    img: "https://fastly.picsum.photos/id/804/5000/2813.jpg?hmac=MzdYjr85Dhh-cm8Lsg8gtuu9acMFoehZfVYcJP_5HkY",
  },
  {
    id: 3,
    name: "Egzum Irwing",
    text: "I’ve tried dozens of different coffees, but nothing compares to this one. It’s flavorful, aromatic, and leaves a nice aftertaste. Truly a cup of perfection! I finally found my favorite coffee!",
    img: "https://fastly.picsum.photos/id/375/5000/3333.jpg?hmac=L53fYFkx5YL5XoVDnKZPiA7_jyVEMegb-BXhxDm4tuM",
  },
  {
    id: 5,
    name: "Sintia Green",
    text: "This coffee is a game-changer! It's so smooth and not bitter at all. I can enjoy it black, which is rare for me. I recommend it to anyone who appreciates a top-notch cup of coffee!",
    img: "https://fastly.picsum.photos/id/726/3264/2176.jpg?hmac=Jpm624M2m9Nf7Vjl-b4Mu-deTkC0nbs5Ec6iBCtwrSw",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
