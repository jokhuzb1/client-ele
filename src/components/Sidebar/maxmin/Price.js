import s from "./Price.module.css";

const Price = () => {

  return (
    <div className={s.price}>
      <label>Price :</label>
      <div className={s.price_item}>
        <div>
          <label className={s.min}>Min : </label>
          <input className={s.price_input} type="number" min='0' max='9999' />
        </div>
        <div>
          <label className={s.max}>Max : </label>
          <input className={s.price_input} type="number" min="0" max="9999" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Price;