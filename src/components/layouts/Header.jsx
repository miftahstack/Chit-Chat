import React from "react";
import Container from "../Container";
import Flex from "../Flex";

// Img
import logo from "../../assets/messenger.png";
import { Link } from "react-router";
// Img

const Header = () => {
  return (
    <>
      <Container>
        <Flex className={`justify-between pt-5`}>
          <div className="">
            <img className=" w-10 scale-140" src={logo} alt="" />
          </div>
          <ul className="flex gap-x-5">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
            <Link to={"/signup"}>
              <li>SignUp</li>
            </Link>    
          </ul>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
