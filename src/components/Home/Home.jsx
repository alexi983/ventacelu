import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function HomePage() {
    const imgBanner = './presentacioncelu.jpg';
    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center"
                style={{ backgroundImage: `url(${imgBanner})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                    <h2 className="text-[#3044b5] font-bold text-[100px] leading-[80px] uppercase">
                        Venta 
                    </h2>
                    <h2 className="text-[#631717] font-bold text-[100px] leading-[80px] uppercase">celulares</h2>
                    <Link to="/" className="bg-[#2d3a4b] px-[50px] py-[5px] text-[18px] uppercase leading-[46px] flex w-[210px] text-center text-[#ffffff] mt-[30px]">SHOP NOW</Link>
                
                </div>
            </div>
            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
    
            </div>
        </div>
    );
}