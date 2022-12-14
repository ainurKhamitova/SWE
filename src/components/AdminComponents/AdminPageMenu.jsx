import React from "react";
import { Outlet, Link } from "react-router-dom";

const AdminPageMenu = () => {
  return (<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href = "#">Menu</a>
    <hr/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href = "/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href = "#"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Database
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href = "/admin/doctor" >Doctors</a></li>
            <li><a class="dropdown-item" href = "/admin/patient" >Patients</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
 
  </nav>
  <Outlet />
    </>
  )
};

export default AdminPageMenu;