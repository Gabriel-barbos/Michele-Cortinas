import { useMemo } from "react";
import styles from "./CarrinhoBTN.css";

const CarrinhoBTN = ({
  addToCartButtonText,
  propLeft,
  propWidth,
  propBackgroundColor,
}) => {
  const carrinhoBTNStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const btnCarrinhoStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={styles.carrinhobtn} style={carrinhoBTNStyle}>
      <div className={styles.btnCarrinho} style={btnCarrinhoStyle} />
      <div className={styles.adicionarAoCarrinho}>{addToCartButtonText}</div>
    </button>
  );
};

export default CarrinhoBTN;
