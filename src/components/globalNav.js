import React from 'react';
import {NavLink} from 'react-router-dom';
import './globalNav.css';

const GlobalNav = () => {
    // only consider an event active if its event id is an odd number
    const active = (match, location) => {
      if (!match) {
        return false;
      }
      return match.url === location.pathname;
    };
    return (
        <div className="global-nav">
            <NavLink exact to="/index" isActive={active} activeClassName="global-nav-on">首页</NavLink>
            <NavLink exact to="/lottery" isActive={active} activeClassName="global-nav-on">彩票</NavLink>
            <NavLink exact to="/live" isActive={active} activeClassName="global-nav-on">真人娱乐</NavLink>
            <NavLink exact to="/fish" isActive={active} activeClassName="global-nav-on">捕鱼王</NavLink>
            <NavLink exact to="/slot" isActive={active} activeClassName="global-nav-on">老虎机</NavLink>
            <NavLink exact to="/sport" isActive={active} activeClassName="global-nav-on">体育</NavLink>
            <NavLink exact to="/poker" isActive={active} activeClassName="global-nav-on">棋牌</NavLink>
            <NavLink exact to="/activity" isActive={active} activeClassName="global-nav-on">VIP招待</NavLink>
        </div>
    );
};


export default GlobalNav;