import Logo from './Logo'
import { CarrinhoButton } from './Carrinho'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@mui/material';

const JourneyHeader = ({noCart}) => {
    const logado = sessionStorage.getItem("token_client");

    return (
        <header>
            <nav className='navbar-journey'>
                <div className="logo-container">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="menu-items">
                    <a href="/contato">Contato</a>
                    <a href="/sobre">Sobre nós</a>
                    <a href="/duvidas">Perguntas frequentes</a>
                    <a href="/dashboard/login" className="admin-area"><LockOutlinedIcon /></a>
                    {!logado && <a href="/entrar" className="client-area">Entrar na conta</a>}
                    {logado && <a href="/painel" className="client-area">Área do cliente</a>}
                    {!noCart && <CarrinhoButton />}
                </div>
            </nav>  
        </header>
    )
}

export default JourneyHeader