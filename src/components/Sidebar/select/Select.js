import n from './Select.module.css'

const Select = ({ label, options, setValue }) => {
  return (
    <div className={n.select}>
      <label >{label}</label>
      <select>
        <>
          {options?.map((option, index) => (
            <option onChange={() => setValue(option)}
              key={index}
              value={option}
              className={n.option_select}> {option}</option>
          ))}
        </>
      </select>
    </div>
  );
};

export default Select;
