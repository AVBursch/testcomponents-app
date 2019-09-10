import React, { Component } from 'react';

export class GalleryNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" >Home</a>

            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"> Categories </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" >Assembly spaces</a>
                        <a className="dropdown-item" >Bedroom</a>
                        <a className="dropdown-item" >Dining</a>
                        <a className="dropdown-item" >Environment</a>
                        <a className="dropdown-item" >Exterior residential</a>
                        <a className="dropdown-item" >HDR</a>
                        <a className="dropdown-item" >Holiday</a>
                        <a className="dropdown-item" >Light fixtures exterior</a>
                        <a className="dropdown-item" >Living</a>
                        <a className="dropdown-item" >Office</a>
                        <a className="dropdown-item" >Sports equipment</a>
                        <a className="dropdown-item" >Vehicles</a>
                        <a className="dropdown-item" >Bathroom</a>
                        <a className="dropdown-item" >Decoration</a>
                        <a className="dropdown-item" >Electronic</a>
                        <a className="dropdown-item" >Exterior public</a>
                        <a className="dropdown-item" >Full 3D Models</a>
                        <a className="dropdown-item" >Hardware and construction</a>
                        <a className="dropdown-item" >Kitchen</a>
                        <a className="dropdown-item" >Light fixture interior</a>
                        <a className="dropdown-item" >Materials</a>
                        <a className="dropdown-item" >People and animals</a>
                        <a className="dropdown-item" >Vegetation</a>
                        <a className="dropdown-item" >Windows</a>
                    </div>
                </li>
            </ul>

            <form className="form-inline" action="/action_page.php">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                <button className="btn btn-success" type="submit">Search</button>
            </form>

            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" >Help</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Refresh</a>
                </li>
            </ul>

        </nav>
    }
}