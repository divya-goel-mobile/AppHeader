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
} from "../styles/Navbar.styles";
import ProfileImg from "../assets/profile.png";
import SearchImg from "../assets/search.png";
//import BannerImg from "../assets/banner.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      {/* <Banner src={BannerImg}></Banner> */}
      <NavbarInnerContainer>
        <LeftContainer>
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
          <SearchBarContainer />
          <Logo src={SearchImg}></Logo>
          <Logo src={ProfileImg}></Logo>
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
