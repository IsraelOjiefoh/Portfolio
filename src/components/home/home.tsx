import "./home.css";
const Home = () => {
  return (
    <>
      <h1 className="bounceInLeft text-gray-100 text-center text-2xl p-5">
        Welcome, I am
      </h1>
      <p className=" fadeInRight text-center text-gray-200 text-5xl  ">
        {" "}
        OJiefoh Israel
      </p>

      <p className="bounceInLeft text-gray-100 text-center text-2xl p-5 mb-10">
        {" "}
        Front-End Developer
      </p>
      <div className="flex justify-center zoomIn">
        <a href="https://www.facebook.com/progile.php?id=100085330922025" target="_blank">
          <i className="fa-brands fa-facebook px-10 text-2xl cursor-pointer text-blue-600  transition ease-in   hover:text-blue-700"></i>
        </a>
        <a href="https://www.github.com/IsraelOjiefoh" target="_blank">
          <i className="fa-brands fa-github px-10 text-2xl cursor-pointer"></i>
        </a>
        <a href="https://www.linkedin.com/in/israel-mayowa-296304265 " target="_blank">

        <i className="fa-brands fa-linkedin px-10 text-2xl text-blue-600  transition ease-in   hover:text-blue-700 cursor-pointer"></i>
        </a>
        <a href="https://www.twitter.com/israel4ev?t=yViy2xclRaTB-3gvXAVYw&s=09" target="_blank">

        <i className="fa-brands fa-twitter px-10 text-2xl  text-blue-500  transition ease-in   hover:text-blue-700 cursor-pointer" ></i>
        </a>
      </div>

      <div className="mx-auto flex justify-center pt-10 zoomIn">
        <a href="src/assets/Israel O Cv.pdf" target="_blank  ">
          <button className="bg-gray-800 text-white py-3 px-5 text-center  mr-20 flex justify-center">
            Download Resume
          </button>
        </a>
        <a href="/contact">
          <button className="bg-gray-800 text-white py-3 px-5 text-center  mx-auto flex justify-center">
            Let's Talk
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;
