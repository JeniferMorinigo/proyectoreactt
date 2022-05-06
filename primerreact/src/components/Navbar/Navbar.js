import CartIcon from "../CartIcon/CartIcon";
export default function Navbar() {
    
    const headerStyles = {
        display: "flex",
        flexWrap: "wrap",
        jusifyContent: "space-between",
        listStyle: "none"
    }
    return (
        <header className="header">
            <div className="nombre">
                SKZ
            </div>
            <ul className="links" style={headerStyles}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Quienes somos</li>
            </ul>
            <CartIcon count="0"/>
            
        </header>
    );
}