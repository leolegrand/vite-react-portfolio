import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>LEO<br></br>LEGRAND</h1>
            <div className='header__right'>
                <p className='header__availability'>AVAILABLE<br></br>FOR WORKS</p>
                <a className='header__contact' href="mailto:leo.legrandm@gmail.com">CONTACT</a>
            </div>
        </header>
    );
};

export default Header;