import { useEffect, useState, useRef } from "react";
import { toPng } from 'html-to-image'

// feet array
const feet = [];

//feet calc array
const feetCalc = [];

//while loop for auto fill feet and feetCalc array
let i = 10;
let j = 10;
while(i > 1.9){
  feet.push(Number(i));
  feetCalc.push(j);
  if( i != Math.floor(i)+'.3' && i != Math.floor(i)+'.6' && i != Math.floor(i)+'.9'){
    i -= 0.1;
    i = i.toFixed(1)
  }
  else{
    i -= 0.3;
    i = i.toFixed(1)
  }
  j -= 0.25;
}


const TableBody = ({name}) => {

  const [q, setQ] = useState(2);
  const [model, setModel] = useState('');
  const [pieces, setPieces] = useState(Array(feet.length).fill(0)); // Initialize an array to store the pieces input for each row
  const[input, setInput] = useState(0);
  const[imageMode, setImageMode] = useState('imageModeOff');
  const[mode, setMode] = useState('off');

  const handlePieceChange = (index, value) => {
    if(parseInt(value)){
    const updatedPieces = [...pieces];
    updatedPieces[index] += parseInt(value); // Update the pieces for the specific row
    setPieces(updatedPieces);
    };
    setInput((prev) => ({ ...prev, [index]: "" }));
  };

  const calculateTotalFeet = () => {
    let  total = 0;
    for(let i = 0; i < feetCalc.length; i++){
       total += feetCalc[i] * pieces[i];
    }
    return total;
  };

  const handleToggleImageMode = () => {
    setImageMode((prevMode) => (prevMode === 'imageModeOff' ? 'imageModeOn' : 'imageModeOff'));
    setMode((perv) => (perv === 'off' ? 'on' : 'off'));
  };

  const appRef = useRef(null);

  const saveAppAsImage = () => {
    if (appRef.current === null) {
      return;
    }

    toPng(appRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = name+" "+Date.now();
        link.click();
      })
      .catch((err) => {
        console.error('Something went wrong!', err);
      });
  };


  useEffect(() => {},[input]);
  return(
    <>
    <div ref={appRef} style={{backgroundColor: 'white'}}>
      <div className={mode}>
        <div className="tableBody">
          <div className="qModel">
            <div className="q">
              <select id="q" value={q} onChange={(e) => setQ(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <input id="model" list="model1" value={model}
              onChange={(e) => setModel(e.target.value)}/>
              <datalist id="model1">
              <option value='10_10'/>
                <option value="1_6"/>
                <option value="1_10"/>
                <option value="35_6"/>
                <option value="45_6"/>
                <option value="35_10"/>
                <option value="45_10"/>
                <option value="pvc_18_18"/>
                <option value="pvc_1_18"/>
                <option value="AB_12_12"/>
                <option value="AB_15_15"/>
                <option value="AB_18_18"/>
                <option value="AB_25_25"/>
                <option value="AB_35_35"/>
                <option value="AD_12_12"/>
                <option value="AD_15_15"/>
                <option value="AD_18_18"/>
                <option value="CB_20_8"/>
                <option value="CB_25_8"/>
                <option value="CB_32_8"/>
                <option value="CB_45_10"/>
                <option value="AE_32_10"/>
                <option value="AE_22_10"/>
                <option value="AE_22_18"/>
                <option value="AE_25_18"/>
                <option value="AE_35_22"/>
                <option value="AE_45_28"/>
                <option value="Bundle"/>
              </datalist>
            </div>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Feet</th>
                  <th>Input</th>
                  <th>Piece</th>
                </tr>
              </thead>
              <tbody>
                {feet.map((foot, index) => (
                  <tr key={index}>
                    <td>{foot}</td>
                    <td>
                      <input
                        type="number"
                        value={input[index] || ""}
                        onBlur={(e) => handlePieceChange(index, e.target.value)}
                        onChange={(e) => setInput((prev) => ({ ...prev, [index]: e.target.value }))}
                      />
                    </td>
                    <td>{pieces[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="footer">
              <strong>Total Feet:</strong> {calculateTotalFeet() || 0}
            </div>
          </div>
        </div>
      </div>
      <div className={imageMode}>
      <div className="tableBody">
          <div className="qModel">
            <div className="q">
              <select id="q" value={q} onChange={(e) => setQ(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <input id="model" list="model1" value={model}
              onChange={(e) => setModel(e.target.value)}/>
              <datalist id="model1">
              <option value='10_10'/>
                <option value="1_6"/>
                <option value="1_10"/>
                <option value="35_6"/>
                <option value="45_6"/>
                <option value="35_10"/>
                <option value="45_10"/>
                <option value="pvc_18_18"/>
                <option value="pvc_1_18"/>
                <option value="AB_12_12"/>
                <option value="AB_15_15"/>
                <option value="AB_18_18"/>
                <option value="AB_25_25"/>
                <option value="AB_35_35"/>
                <option value="AD_12_12"/>
                <option value="AD_15_15"/>
                <option value="AD_18_18"/>
                <option value="CB_20_8"/>
                <option value="CB_25_8"/>
                <option value="CB_32_8"/>
                <option value="CB_45_10"/>
                <option value="AE_32_10"/>
                <option value="AE_22_10"/>
                <option value="AE_22_18"/>
                <option value="AE_25_18"/>
                <option value="AE_35_22"/>
                <option value="AE_45_28"/>
                <option value="Bundle"/>
              </datalist>
            </div>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Feet</th>
                  <th>Pieces</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {feet.map((foot, index) => (
                  pieces[index] > 0 && (
                  <tr key={index}>
                    <td>{foot}</td>
                    <td>{pieces[index]}</td>
                    <td>{feetCalc[index] * pieces[index]}</td>
                  </tr>
                  )
                ))}
              </tbody>
            </table>
            <div id="footer">
              <strong>Total Feet:</strong> {calculateTotalFeet() || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <button onClick={handleToggleImageMode}>Image mode</button>
      </div>
    <div className='image'>
        <button onClick={saveAppAsImage}>take pic</button>
      </div>
    </>
  )
}

export default TableBody;