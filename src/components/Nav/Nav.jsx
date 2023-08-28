import { Link } from "react-router-dom"

const Nav = ({ user }) => {
  return (
    <nav>
        <Link to="/orders"> Order History </Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new"> New Order </Link>
        <h1>
          {user.name}
        </h1>
    </nav>
  )
}

export default Nav
