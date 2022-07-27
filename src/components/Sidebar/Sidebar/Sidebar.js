import { useState } from "react";
import s from "./Sidebar.module.css";
import Price from "../maxmin/Price";
import Select from "../select/Select";

const Sidebar = () => {
  const [storage, setStorage] = useState(64)
  const [ram, setRam] = useState(32)
  const [color, setColor] = useState('green')

  const data = {
    colors: ['green', 'red', 'nightblue', 'black'],
    rams: [16, 32],
    storages: [64, 128, 256]
  }

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <p>Filters</p>
      </div>
      <hr />
      <div className={s.filter}>
        <div className={s.storage_ram}>
          <div>
            <Select label="Storage :" options={data.storages} setValue={setStorage} />
          </div>
          <div>
            <Select label="Ram :" options={data.rams} setValue={setRam} />
          </div>
          <div>
            <Select label="Color :" options={data.colors} setValue={setColor} />
          </div>
        </div>
        <hr />
        <Price />
      </div>
    </nav>
  );
};

export default Sidebar;
