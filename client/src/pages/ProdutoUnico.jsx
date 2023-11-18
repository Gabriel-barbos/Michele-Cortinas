import CarrinhoBTN from "../components/CarrinhoBTN";
import styles from "./ProdutoUnico.css";

const ProdutoUnico = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.imgprodIcon} alt="" src="/imgprod@2x.png" />
      <header className={styles.header} />
      <footer className={styles.footer} />
      <h1 className={styles.nomeprod}>Cortina #01</h1>
      <div className={styles.larguraEmMetros}>Largura (em metros)</div>
      <div className={styles.exemplo167}>Exemplo: 1,67</div>
      <div className={styles.alturaEmMetros}>Altura (em metros)</div>
      <div className={styles.exemplo1671}>Exemplo: 1,67</div>
      <a className={styles.noSabeMedir}>Não sabe medir? Clique aqui</a>
      <div className={styles.aPartirDe}>A partir de:</div>
      <div className={styles.precoprod}>R$ 500,00</div>
      <CarrinhoBTN addToCartButtonText="Adicionar ao carrinho" />
      <CarrinhoBTN
        addToCartButtonText="Adicionar a Customização"
        propLeft="782px"
        propWidth="289px"
        propBackgroundColor="#bdbdbd"
      />
      <img className={styles.imgprodpIcon} alt="" src="/imgprodp@2x.png" />
      <img className={styles.imgprodpIcon1} alt="" src="/imgprodp@2x.png" />
      <img className={styles.imgprodpIcon2} alt="" src="/imgprodp@2x.png" />
      <img className={styles.imgprodpIcon3} alt="" src="/imgprodp@2x.png" />
      <div className={styles.selecioneUmaCorContainer}>
        <p className={styles.selecioneUmaCor}>Selecione uma cor:</p>
      </div>
      <button className={styles.corprod4} />
      <button className={styles.corprod3} />
      <button className={styles.corprod2} />
      <button className={styles.corprod1} />
      <div className={styles.descrioCortinaBlackoutContainer}>
        <p className={styles.descrio}>{`Descrição: `}</p>
        <p className={styles.descrio}>&nbsp;</p>
        <p
          className={styles.cortinaBlackoutCom}
        >{`cortina blackout com regulagem de abertura e tecido fresco `}</p>
        <p className={styles.cortinaBlackoutCom}>
          que não deixa cheiro, com fácil remoção e lavagem
        </p>
      </div>
    </div>
  );
};

export default ProdutoUnico;
