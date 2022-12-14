
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegistration(props){
  const navigate =useNavigate();

  const [data, setData] = useState({
    doctorId : "",
    iin : "",
    dateOfBirth: "",
    password: "",
    govID: "",
    name: "",
    surname: "",
    contactNo: "",
    deptId: "",
    specializationId: "",
    experience: "",
    img: "",
    category: "",
    price: "",
    scheduleDetail: "",
    degree: "",
    raiting: "",
    address: "",
    homepage: ""
  })

  const [file, setFile] = useState();

  function handleChangeFile(e) {
  
    
    console.log(e.target.files[0])
    setData(prevValue => {
      return {...prevValue,
        ["img"]: (e.target.files[0]).name
      };
    });
    console.log(data)
  }


  let handleSubmit = async (e) => {

    e.preventDefault();
    
    const requestOptions = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/admin/doctor/add_doctor', requestOptions)
        .then(res => res.text())
        .then(text => console.log(text))
        .then(data =>{
            navigate("/admin/doctor")
        }).catch(err => console.log(err))

  }
   

  function handleChange(event) {
      const { name, value } = event.target;
      if(name === 'iin'){
        setData(prevValue => {
          return {...prevValue,
            [name]: value,
            ["password"]: value
          };
        });
      }
      setData(prevValue => {
        return {...prevValue,
          [name]: value
        };
      });
  }
  
  return (<section className="vh-200 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                  <div className="col-md-4 mb-4">
                      <div class="form-outline">
                        <input
                          id="doctorId"
                          type="text"
                          value={data.doctorId}
                          name ="doctorId"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="doctorId">Doctor Id</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <div class="form-outline">
                        <input
                          id="iin"
                          type="text"
                          value={data.iin}
                          name ="iin"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="iin">IIN</label>
                      </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="password"
                          type="text"
                          value={data.iin}
                          name ="password"
                          className="form-control form-control-lg" 
                        />
                        <label className="form-label" for="password">Password</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="govId"
                          type="text"
                          value={data.govId}
                          name ="govId"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="govId">Gov ID</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="name"
                          type="text"
                          value={data.name}
                          name ="name"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="name">Name</label>
                      </div>
                    </div>
                
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="surname"
                          type="text"
                          value={data.surname}
                          name ="surname"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="surname">Surname</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="birthday"
                          type="date"
                          value={data.dateOfBirth}
                          name = "dateOfBirth"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="birthday">DateOfBirth</label>
                      </div>
                    </div>
                
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="contactNo"
                          type="text"
                          value={data.contactNo}
                          name ="contactNo"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="contactNo">Contact No</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="deptId"
                          type="text"
                          value={data.deptId}
                          name = "deptId"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="deptId">Department ID</label>
                      </div>
                    </div>
                
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="specializationId"
                          type="text"
                          value={data.specializationId}
                          name ="specializationId"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="specializationId">Specialization ID</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="experience"
                          type="experience"
                          value={data.experience}
                          name = "experience"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="experience">Experience</label>
                      </div>
                    </div>
                
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          accept="image/*"
                          id="img"
                          type="file"
                          name ="img"
                          className="form-control form-control-lg" 
                          onChange={handleChangeFile}
                        />
                        <label className="form-label" for="img">Image</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div class="form-outline">
                      <input
                          id="category"
                          type="text"
                          value={data.category}
                          name ="category"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="category">Category</label>
                      </div>
                    </div>
                
                    <div class="col-md-4 mb-4">
                      <div class="form-outline">
                        <input
                          id="price"
                          type="text"
                          value={data.price}
                          name ="price"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="price">Price</label>
                      </div>
                    </div>
    
                    <div className="col-md-4 mb-4">
                      <div class="form-outline">
                      <input
                          id="scheduleDetail"
                          type="text"
                          value={data.scheduleDetail}
                          name ="scheduleDetail"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="scheduleDetail">Schedule Details</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                      <input
                          id="degree"
                          type="text"
                          value={data.degree}
                          name ="degree"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="degree">Degree/Education</label>
                      </div>
                    </div>
    
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="raiting"
                          type="text"
                          value={data.raiting}
                          name ="raiting"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="raiting">Raiting</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div class="form-outline">
                      <input
                          id="address"
                          type="text"
                          value={data.address}
                          name ="address"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="address">Address</label>
                      </div>
                    </div>
    
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          id="homepage"
                          type="text"
                          value={data.homepage}
                          name ="homepage"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="homepage">Homepage</label>
                      </div>
                    </div>
                    
                  </div>
    
                  <div className="mt-4 pt-2">
                    <input className="buttonADD" type="submit" value="Submit" />
                  </div>
                </form>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default DoctorRegistration;
