import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
          <div className="navWide">
            <div className="wideDiv">
                <a href="#" onClick={this.burgerToggler}>Home</a>
                <a href="#" onClick={this.burgerToggler}>About</a>
                <a href="#" onClick={this.burgerToggler}>Contact</a>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x"></i>
              <div className="narrowLinks">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
          </div>
        </nav>
    );
},

burgerToggler = (props) => {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
        linksEl.style.display = 'none';
    } else {
        linksEl.style.display = 'block';
    }
    }
}

export default NavBar;