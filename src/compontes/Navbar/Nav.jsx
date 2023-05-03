import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg  fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Murojatlar uchun</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className= "collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;
