import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
        <h2>Login Successful</h2>
        <Link to={"/register"} type="button" className="btn btn-success">Back</Link>
    </>
  )
}

export default Home