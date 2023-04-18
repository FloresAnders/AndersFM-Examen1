import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram,faYoutube, faLinkedin,} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const iconStyle = {
    with: "29px",
    height: "29px",
    padding: "15px",
  };
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <p>
            © {2023} {["Anders Flores Morales"]}.
          </p>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/anders.floresmorales">
              <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/flores_anders_/">
              <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/josue-flores-149965272/">
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;