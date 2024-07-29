import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TwitchLogo, TwitchLogoDark } from '../assets/twitch';
import SearchBar from './SearchBar';
import Image from 'next/image';
import WhiteCrown from '../../../public/assets/white-crown.png';
import BlackCrown from '../../../public/assets/black-crown.png';
import InboxWhite from '../../../public/assets/inbox-white.png';
import InboxBlack from '../../../public/assets/inbox-black.png';
import ChatWhite from '../../../public/assets/chat-white.png';
import ChatBlack from '../../../public/assets/chat-black.png';
import DiamondWhite from '../../../public/assets/diamond-white.png';
import DiamondBlack from '../../../public/assets/diamond-black.png';
import BatteryWhite from '../../../public/assets/battery-white.png';
import BatteryBlack from '../../../public/assets/battery-black.png';
import UserIcon from '../../../public/assets/user-icon.png';
import {useWindowWidth} from './utils/index';

function NavBarComponent({ theme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 1024 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [windowWidth, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavBar theme={theme}>
      <div className="flex justify-between items-center p-2">
        <LogoAndLinks className='flex'>
          <ul className="flex space-x-8 font-bold text-lg">
            <li>
              <a href="#">
                <LogoWrapper>
                  {theme === "dark" ? <TwitchLogoDark /> : <TwitchLogo />}
                </LogoWrapper>
              </a>
            </li>
            <li><a href="#">Following</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a></li>
          </ul>
        </LogoAndLinks>
        <div className='flex'>
          <SearchBar />
        </div>
        <IconsAndProfile className='flex'>
          <ul className="flex space-x-8 font-bold text-lg">
            <li>
              <a href="#">
                <ImageWrapper>
                  <Image src={theme === "dark" ? WhiteCrown : BlackCrown} alt="Crown Icon" width={20} height={20} />
                </ImageWrapper>
              </a>
            </li>
            <li>
              <a href="#">
                <ImageWrapper>
                  <Image src={theme === "dark" ? InboxWhite : InboxBlack} alt="Inbox Icon" width={20} height={20} />
                </ImageWrapper>
              </a>
            </li>
            <li>
              <a href="#">
                <ImageWrapper>
                  <Image src={theme === "dark" ? ChatWhite : ChatBlack} alt="Chat Icon" width={20} height={20} />
                </ImageWrapper>
              </a>
            </li>
            <li>
              <a href="#">
                <ImageWrapper>
                  <Image src={theme === "dark" ? DiamondWhite : DiamondBlack} alt="Diamond Icon" width={20} height={20} />
                </ImageWrapper>
              </a>
            </li>
            <li>
              <a href="#">
                <AdFreeWrapper theme={theme}>
                  <Image src={theme === "dark" ? BatteryWhite : BatteryBlack} alt="Battery Icon" width={20} height={20} />
                  <AdFreeText>Go Ad-Free for Free</AdFreeText>
                </AdFreeWrapper>
              </a>
            </li>
            <li>
              <a href="#">
                <UserIconWrapper>
                  <Image src={UserIcon} alt="User Icon" width={30} height={30} />
                </UserIconWrapper>
              </a>
            </li>
          </ul>
        </IconsAndProfile>
        <MobileMenuIcon className='flex' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <i className='fa-solid fa-times' /> : <i className="fa-solid fa-ellipsis-vertical" />}
        </MobileMenuIcon>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu theme={theme}>
          <ul>
            <li><a href="#">Following</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Chat</a></li>
            <li><a href="#">Go Ad-Free for Free</a></li>
          </ul>
        </MobileMenu>
      )}
    </NavBar>
  );
}

const NavBar = styled.nav`
  height: 55px;
  max-width: 100vw;
  background-color: ${props => props.theme === "dark" ? "#000" : "#fff"};
  color: ${props => props.theme === "dark" ? "#fff" : "#000"};
  border-bottom: 1px solid ${props => props.theme === "dark" ? "#2F2B2B" : "#E6E6E6"};

  @media (max-width: 1024px) {
    .flex {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

const LogoAndLinks = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const IconsAndProfile = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LogoWrapper = styled.i`
  display: inline-block;
  height: 25px;
  width: 25px;
`;

const ImageWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

const AdFreeWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme === "dark" ? "#2F2B2B" : "#E6E6E6"};
  padding: 5px;
  border-radius: 5px;
`;

const AdFreeText = styled.span`
  padding-left: 10px;
  font-size: 12px;
  font-weight: 600;
`;

const UserIconWrapper = styled.div`
  height: 30px;
  width: 30px;
  background-color: #3ED3CA;
  padding: 5px;
  border-radius: 50%;
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5em;
  width: 20px;
  height: 20px;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme === "dark" ? "#000" : "#fff"};
  color: ${props => props.theme === "dark" ? "#fff" : "#000"};
  padding: 10px 0;

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 10px 20px;
      border-bottom: 1px solid ${props => props.theme === "dark" ? "#2F2B2B" : "#E6E6E6"};

      a {
        text-decoration: none;
        color: inherit;
        display: block;
        width: 100%;
      }

      &:hover {
        background-color: ${props => props.theme === "dark" ? "#1a1a1a" : "#f0f0f0"};
      }
    }
  }
`;

export default NavBarComponent;
