import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import "../index.css"



  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    body.style.backgroundColor = isDarkMode ? '#333333' : '#ffffff';
    body.style.color = isDarkMode ? '#ffffff' : '#000000';
  };


function NavBar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-success" href="#">
            TextAnalyzer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-sm shadow-0">
              <img src="https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png" className="me-3" style={{height : "40px"}} onClick={toggleDarkMode()} alt="" />
              </button>

              <MDBDropdown>
                <MDBDropdownToggle className="bg-dark text-light border border-success shadow-6" >More</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Text</MDBDropdownItem>
                  <MDBDropdownItem link>Code</MDBDropdownItem>
                  <MDBDropdownItem link>Future</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
