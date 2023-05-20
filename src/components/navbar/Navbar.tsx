import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav id="zoomIn" className="navbar">
        <a href="/home" className="active">
          Home
        </a>

        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </>
  );
};

export default Navbar;
