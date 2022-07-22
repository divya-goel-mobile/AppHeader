import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  SearchBarContainer,
  Banner,
  BlankDiv,
  PrudentialLogo,
  ToggleContainer,
  TogglePersonalContainer,
  ToggleEterpriseContainer,
  LoginButton
} from "../styles/Navbar.styles";
import MessageLogo from "../assets/message.png";
import SearchImg from "../assets/search.png";
import LogoImg from "../assets/prudential-logo.jpeg";

//import BannerImg from "../assets/banner.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      {/* <Banner src={BannerImg}></Banner> */}
      <NavbarInnerContainer>
        <LeftContainer>
          <PrudentialLogo src={LogoImg}></PrudentialLogo>
          <NavbarLinkContainer>
            <NavbarLink to="/home"> Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Claims</NavbarLink>
            <NavbarLink to="/about">Support</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar(!extendNavbar);
              }}
            >
              {" "}
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <ToggleContainer></ToggleContainer>
          <div>
            <Logo src={SearchImg}></Logo>
            <Logo src={MessageLogo}></Logo>
          </div>
          <ToggleContainer>
            <TogglePersonalContainer>Personal</TogglePersonalContainer>
            <ToggleEterpriseContainer>Enterprise</ToggleEterpriseContainer>
          </ToggleContainer>
          <LoginButton>Login</LoginButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/home"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Claims</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">
            Support Prudential
          </NavbarLinkExtended>
          <BlankDiv />
          <NavbarLinkExtended to="/contact">Search</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Contact sales</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Sign Up</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Login</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
