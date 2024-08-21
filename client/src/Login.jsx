import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
      })
      .catch(err => console.error('Error logging in:', err));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"><b>Email</b></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"><b>Password</b></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <p className="mt-3">Don't have an account?</p>
              <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
