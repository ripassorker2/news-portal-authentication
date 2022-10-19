import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../src/assests/Brand.jpeg";
import Brand2 from "../../../src/assests/Brand22.png";
import { FcGoogle, FcPrivacy } from "react-icons/fc";
import { AiFillGithub, AiFillSetting } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaTrailer,
} from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const RightSideNav = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <button className="btn btn-outline-info w-100 mt-3">
        <FcGoogle size={25} className="me-2" /> Sign in with Google
      </button>
      <button className="btn btn-outline-dark w-100 mt-3">
        <AiFillGithub size={25} className="me-2" /> Sign in with Google
      </button>
      <div className="my-4">
        <h5>Find us on</h5>
        <div>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook className="me-2" />
              Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter className="me-2" />
              Twitter{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram className="me-2" />
              Instagram
            </ListGroup.Item>
            <ListGroup.Item>
              <FaYoutube className="me-2" /> Youtube{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <FaLinkedin className="me-2" />
              Linkedin
            </ListGroup.Item>
            <ListGroup.Item>
              <FaWhatsapp className="me-2" />
              Whatsapp
            </ListGroup.Item>
            <ListGroup.Item>
              <FcPrivacy className="me-2" />
              Privacy
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTrailer className="me-2" />
              Terms and Condition
            </ListGroup.Item>
            <ListGroup.Item>
              <AiFillSetting className="me-2" />
              Setting
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={Brand1} alt="First slide" />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Brand2} alt="Second slide" />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
