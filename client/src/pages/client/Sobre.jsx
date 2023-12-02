import '../../assets/css/sobre.css'
import logo from '../../assets/icons/logo.png'
export function Sobre(){
    return(
        <>
        <div className='about'>
    <div className="about-container">
      <img className="img-logo1" alt="" src={logo} />
      <div className="left-box1">
        <h1 className="sobre-title">Sobre Nós</h1>
        <p className="desc-txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. I
        </p>
      </div>
    </div>
    </div>
        </>
    )
}