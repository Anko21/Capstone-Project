



function Header(){
    return(
        <div>
             <img src={require('.\images\logo.png')} alt="A picture of a cat"></img>
        <nav>
            <ul>
                <li><a href="">Home </a></li>
                <li><a href="/about" id>About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/online order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Header;