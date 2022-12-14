import React from "react";
import { useNavigate } from "react-router-dom";

function AdminProfile(){
  const navigate = useNavigate();
  function logout(){
    navigate("/")
  }
    return <div className="adProfile">
            <div className="col-md-12">
                <div className="card pat">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src = {require('./avatar7.png')} alt="Admin" className="rounded-circle adminImg" />
                            <div className="mt-3">
                                <h4>Hospital Admin</h4>
                                <p className="text-secondary mb-1">Admin</p>
                                <p className="text-muted font-size-sm">DenSys.me</p>
                                <button className="buttonADD" onClick = {logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
              <div className="card patInfo">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Admin admin
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Hospital Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     DenSys.me
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Telephone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      8 708 123 45 87
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      admin@hospital.com
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Office</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      A-101
                    </div>
                  </div>
                  <hr/>
                </div>
            </div>   
    </div>
</div>
               
    
}
export default AdminProfile;