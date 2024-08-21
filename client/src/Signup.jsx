import { Link } from "react-router-dom";
import './App.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(result => {console.log(result)
          navigate('/login')
        })
        .catch(err => console.log(err))
    }

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"><b>Name</b></label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"><b>Email</b></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"><b>Password</b></label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
                <p>Already have an account? </p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup