import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div class="wrap">
		<div class="h">
  <header class="header">
    <h1>PLANNING POKER</h1>
  </header>
</div>
<div class="f">
<form class="box" action="form.html" method="post">
	<h1>Login</h1>
	<input type="text" name="" placeholder="Username" onChange={(event) => setName(event.target.value)}/>
	<input type="text" name="" placeholder="Room ID" onChange={(event) => setRoom(event.target.value)}/> 
  <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/deck?name=${name}&room=${room}`}>
	<input type="submit" name="" value="Enter"/>
  </Link>
</form>
</div>
<svg class="widthw" xmlns="http://www.w3.org/2000/svg" id="svg32" version="1.1" viewBox="0 100 300 307"
    preserveAspectRatio="none" height="300px" width="200px"  transform="translate(0,-80)">
    <g>
      <g id="svg21"  version="1.1" viewBox="0 0 0 0"
         height="0px" width="100%">
        {/* <path id="path12" fill="#4f7bf5" fill-opacity="0.3" d="M0 192c220-92 440-92 660 0 220 98 440 98 660 0v308H0" /> */}
        <path id="path15" fill="#04f7bf5" fill-opacity="0.5" d="M0 192c220-92 440-92 660 0 220 98 440 98 660 0v308H0" />
        <path id="path17" fill="#07004b" fill-opacity="0.7" d="M0 192c220-92 440-92 660 0 220 98 440 98 660 0v308H0" />
        <path id="path19" fill="#08ffff" fill-opacity="0.7" d="M0 192c220-92 440-92 660 0 220 98 440 98 660 0v308H0" />
      </g>
    </g>
  </svg>
</div>
  );
}