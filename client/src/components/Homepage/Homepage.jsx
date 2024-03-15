import { FaArrowRightLong } from "react-icons/fa6";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div>
        <h1>TRISHANEWW</h1>
        <p>
          I'm an independent creative developer & designer based in Oakville,
          Canada{" "}
        </p>

        <div className="view-container">
          <div className="view-container__link">
            <FaArrowRightLong color="white" />
            <p>Check Out My Projects</p>
          </div>

          <div className="view-container__link">
            <FaArrowRightLong color="white" />
            <p>Learn More About Me</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
