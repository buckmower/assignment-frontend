import React from 'react';
import styled from 'styled-components';
import { TwitchLogo } from '../assets/twitch';
import { TwitchLogoDark } from '../assets/twitch-dark';
import SearchBar from './SearchBar';
import Image from 'next/image'
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

function NavBarComponent(props) {
  let theme = props.theme;
  return (
      <NavBar theme={theme}>
        <div className="flex justify-between items-center p-2">
          <div className='flex'>
            <ul className="flex space-x-8 font-bold text-lg">
              <li>
                <a href="#"><i style={{display: "inline-block", height: "25px", width: "25px"}}>{theme === "dark" ? <TwitchLogoDark /> : <TwitchLogo />}</i></a>
              </li>
              <li>
                <a href="#">Following</a>
              </li>
              <li>
                <a href="#">Browse</a>
              </li>
              <li>
                <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <SearchBar />
          </div>
          <div className='flex'>
            <ul className="flex space-x-8 font-bold text-lg">
              <li>
                <a href="#"><Image style={{width: "20px", height: "20px"}} src={theme === "dark" ? WhiteCrown : BlackCrown} /></a>
              </li>
              <li>
                <a href="#"><Image style={{width: "20px", height: "20px"}} src={theme === "dark" ? InboxWhite : InboxBlack} /></a>
              </li>
              <li>
                <a href="#"><Image style={{width: "20px", height: "20px"}} src={theme === "dark" ? ChatWhite : ChatBlack} /></a>
              </li>
              <li>
                <a href="#"><Image style={{width: "20px", height: "20px"}} src={theme === "dark" ? DiamondWhite : DiamondBlack} /></a>
              </li>
              <li>
                <a href="#">
                  <div style={{lineHeight: "1", backgroundColor: "#2F2B2B", padding: "5px"}}>
                    <Image style={{display: "inline-block", width: "20px", height: "20px"}} src={theme === "dark" ? BatteryWhite : BatteryBlack} />
                    <span style={{paddingLeft: "10px", fontSize: "12px", fontWeight: "600"}}>Go Ad-Free for Free</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div style={{height: "30px", width: "30px", backgroundColor: "#3ED3CA", padding: "5px 0", borderRadius: "20px"}}>
                    <Image style={{display: "inline-block", width: "30px", height: "30px"}} src={UserIcon} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
  );
}

const NavBar = styled.nav`
    height: 55px;
    background-color: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
    color: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
    border-bottom: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
`; 

export default NavBarComponent;
