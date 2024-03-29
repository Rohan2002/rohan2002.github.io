import React from 'react'
import { Icon } from "semantic-ui-react"
import { isMobile } from 'react-device-detect';
import "./index.css";

const SideBar = () => {
  return (
    <>
    {!isMobile ?
    <div className='sidebar'>
      <ul>
        <li><a href="#home"><Icon size='big' name="home" /></a></li>
        <li><a href="#about"><Icon size='big' name="user" /></a></li>
        <li><a href="#skills"><Icon size='big' name="code" /></a></li>
        <li><a href="#experience"><Icon size='big' name="suitcase" /></a></li>
        <li><a href="#projects"><Icon size='big' name="boxes" /></a></li>

      </ul>
    </div> : null}
    </>
  )
}
export default SideBar;