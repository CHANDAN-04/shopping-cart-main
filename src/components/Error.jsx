import { Link } from "react-router-dom"

const ErrorPage = () => {

  return (
    <div  style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
      fontSize: "30px"
    }}>
      <h1>This route doesn't exist!</h1>
      <Link to="/">
        Go back to the home page by clicking here
      </Link>
    </div>
  )
}

export default ErrorPage