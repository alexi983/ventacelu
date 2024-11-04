import Navbar from "../Navbar/Navbar"; 
import { Link } from 'react-router-dom'; 


export default function HeaderComponent() {
    const Logo = './ventacelu/phone_store.png';
    
    return (
        <div className="container mx-auto max-w-[1370px]">
            <div className="flex h-[120px] items-center justify-between">
                <div><img src={Logo} alt="Logo principal" /></div>
                <div className="flex items-center">
                    <Navbar />
                    <Link to="/cart" className="ml-4 text-blue-600"></Link> {}
                </div>
            </div>
        </div>
    );
}


