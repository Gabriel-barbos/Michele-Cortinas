import Logo from './Logo'
import { CarrinhoButton } from './Carrinho'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const JourneyHeader = () => {
    return (
        <header>
            <nav className='navbar-journey'>
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="menu-items">
                    <a href="">Contato</a>
                    <a href="">Sobre nós</a>
                    <a href="">Perguntas frequentes</a>
                    <a href="/dashboard/login" className="admin-area"><LockOutlinedIcon /></a>
                    <a href="/entrar" className="client-area">Área do cliente</a>
                    
                    <CarrinhoButton />
                </div>
            </nav>  
        </header>
    )
}

export default JourneyHeader