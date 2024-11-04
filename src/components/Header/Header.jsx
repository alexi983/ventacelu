import Navbar from "../Navbar/Navbar"; 
import { Link } from 'react-router-dom'; 
import Logo from './Header/phone_store.png'; 


export default function HeaderComponent() {
    const Logo = '/phone_store.png';
    
    return (
        <div className="container mx-auto max-w-[1370px]">
            <div className="flex h-[120px] items-center justify-between">
                <div><img src={Logo} alt="Logo Principal" /></div>
                <div className="flex items-center">
                    <Navbar />
                    <Link to="/cart" className="ml-4 text-blue-600"></Link> {}
                </div>
            </div>
        </div>
    );
}


