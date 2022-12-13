import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to ="/"> {props.title} </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to ="/">{props.title}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Color Pallete
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className="container" >
            <button className='btn btn-primary mx-2' type='button' onClick={props.toggleBlue}/>
            <button className='btn btn-success mx-2' type='button' onClick={props.toggleGreen}/>
            <button className='btn btn-danger mx-2' type='button' onClick={props.toggleRed}/>
            {/* <button className='btn btn-info mx-2' type='button'/> */}
            <button className='btn btn-warning mx-2' type='button' onClick={props.toggleYellow}/>
            </div>
            <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className ="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch {props.Mode} Mode</label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,  //if we dont pass props it will give error
    home : PropTypes.string
}

Navbar.defaultProps = {
    title : 'Set title here',     //set a default props if not passed 
    home : 'Set home here'
}