import React from 'react'

export default function Select({ label, options, setValue, current }) {
  const currentValue = typeof current === 'string' ? current.toUpperCase() : current;

  return (
    <>
      <label >{label}</label>
      <select onChange={(e) => setValue(e.target.value)}>
        <option selected={true} value={current} disabled> {currentValue}</option>
        {options.map((option) => (
          <option value={option} key={option} >{option}</option>
        ))}
      </select>
    </>
  )
}
