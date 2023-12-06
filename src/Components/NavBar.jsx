import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"


const NavBar = () => {
  return (
    <div className="flex w-full shadow-lg ">
        <nav className="flex items-center w-full py-5 px-28 justify-between">
            <div className="flex items-center justify-center gap-10">
                <img src={logo} alt="logo"></img>
                <ul className="flex gap-10">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="flex items-center  gap-10 justify-center">
                <img src={cart} alt="cart"></img>
                <img src={avatar}className="w-[30px]" alt="avatar"></img>
            </div>
        </nav>   
    </div>
  )
}

export default NavBar
