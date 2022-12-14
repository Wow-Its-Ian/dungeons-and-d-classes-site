import React, { useState } from 'react'
import NavOption from './NavOption'

function NavBar() {
	const [selectedNav, setSelectedNav] = useState('/')
  return (
	<nav style={{zIndex: '1', position: 'fixed', display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', paddingTop: '1em', paddingBottom: '1em', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
		<NavOption onClick={() => {setSelectedNav('/')}} text='Home' selected={selectedNav === '/'} setSelectedNav={setSelectedNav} link='/' />
		<NavOption onClick={() => {setSelectedNav('/about')}} text='About' selected={selectedNav === '/about'} setSelectedNav={setSelectedNav} link='/about' />
		<NavOption onClick={() => {setSelectedNav('/episodes')}} text='Episodes' selected={selectedNav === '/episodes'} setSelectedNav={setSelectedNav} link='episodes' />
		<NavOption text='Twitch' selected={false} link='https://www.twitch.tv/wow_its_ian' externalLink />
		<NavOption text='Patreon' selected={false} link='https://patreon.com/dungeonsanddclasses' externalLink />
		<NavOption onClick={() => {setSelectedNav('/donate')}} text='Donate' selected={selectedNav === '/donate'} setSelectedNav={setSelectedNav} link='donate' />
	</nav>
  )
}

export default NavBar