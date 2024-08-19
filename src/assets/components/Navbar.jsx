import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import {faUserLock} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {faUserGear} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { clp } from "../../utils/total";


function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mía!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faPizzaSlice} /> Home</button>
              </li>
                {
                  token ? (
                    <>
                    <li className="nav-item">
                    <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faUserLock} /> Profile</button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faLock} /> Logout</button>
                  </li>
                  </>
                  ):(
                    <>
                    <li className="nav-item">
                      <button type="button" className="btn btn-dark"> <FontAwesomeIcon icon={faRightToBracket} /> Login</button>
                    </li>
                    <li className="nav-item">
                      <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faUserGear} /> Register</button>
                    </li>
                    </>
                  )
                }
            </ul>
            <button type="button" class="btn btn-link"> <FontAwesomeIcon icon={faCartShopping} />Total: ${clp(total)}</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
