import Logo from './Logo'
import { CarrinhoButton } from './Carrinho'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const JourneyHeader = ({noCart}) => {
    const logado = sessionStorage.getItem("token_client");
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <nav className='navbar-journey'>
                <div className="logo-container">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className={`menu-items`}>
                    <a href="">Contato</a>
                    <a href="">Sobre nós</a>
                    <a href="">Perguntas frequentes</a>
                    <a href="/dashboard/login" className="admin-area"><LockOutlinedIcon /></a>
                    {!logado && <a href="/entrar" className="client-area">Entrar na conta</a>}
                    {logado && <a href="/painel" className="client-area">Área do cliente</a>}
                </div>
                <div className="menu-actions">
                    {!noCart && <CarrinhoButton />}
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </div>
            </nav>  
        </header>
    )
}

export default JourneyHeader