import { useState, useEffect } from "react";

const Header = () => {
  const [date, setDate] = useState('');
  const [comp, setComp] = useState(2);

  const [name, setName] = useState('');

  useEffect(() => {

  },[date,comp,name])


  return (
    <>
      <div className="dateComp">
        <div>
          <label htmlFor="comp">Company : </label>
          <select value={comp} onChange={(e) => setComp(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date : </label>
          <input id="date" type="date" value={date} 
          onChange={(e) => setDate(e.target.value)}/>
        </div>
      </div>
      <div className="name">
          <label htmlFor="name">Name : </label>
          <input id="name" list="name1" value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <datalist id="name1">
            <option value="B p"/>
            <option value="kasim bhai"/>
            <option value="porur bhai"/>
            <option value="vandavasi bhai"/>
            <option value="Raja anna"/>
            <option value="mama"/>
            <option value="vikram"/>
            <option value="V.D Timber"/>
            <option value="surender"/>
            <option value="priya panel"/>
            <option value="deva"/>
            <option value="raja kumar"/>
            <option value="M.M glass"/>
          </datalist>
          
        </div>
    </>
  )
}

export default Header;