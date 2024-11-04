import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/samsung">samsung</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/iphone">iphone</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/category/xiaomi">xiaomi </Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="mx-[15px]">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" /> {}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
