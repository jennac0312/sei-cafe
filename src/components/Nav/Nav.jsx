import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
        <Link to="/orders"> Order History </Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new"> New Order </Link>
    </nav>
  )
}

export default Nav