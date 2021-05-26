import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FinishRegister() {
  
  const state = useSelector(state => state)

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Fazer Login</Link>
    </>
  )
}

export default FinishRegister;