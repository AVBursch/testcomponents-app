import React, { Component } from 'react';

export class GalleryNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <a className="navbar-brand" >Logo</a>

            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" >Link 1</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Link 2</a>
                </li>


                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown">

                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" >Link 1</a>
                    <a className="dropdown-item" >Link 2</a>
                    <a className="dropdown-item" >Link 3</a>
                </div>
                </li>
            </ul>

            <form className="form-inline" action="/action_page.php">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                <button className="btn btn-success" type="submit">Search</button>
            </form>

            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" >Link 1</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" >Link 2</a>
                </li>
            </ul>

        </nav>
    }
}