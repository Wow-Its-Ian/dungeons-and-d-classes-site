import React from 'react'
import { Link } from 'react-router-dom'

function NavOption(props) {

	return (
		props.externalLink ? <a style={{cursor: 'pointer', fontWeight: props.selected ? 'bold' : 'normal', textDecoration: 'none'}} href={props.link} target='_blank'>{props.text}</a> : <Link style={{cursor: 'pointer', fontWeight: props.selected ? 'bold' : 'normal', textDecoration: 'none'}} to={props.link} onClick={props.onClick}>{props.text}</Link>
	)
}

export default NavOption