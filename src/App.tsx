import React, { useState } from 'react';
import './App.css';

export interface CheckboxLabel {
  name: string
}

const inputs: CheckboxLabel[] = [
  {name: 'Select all'},
  {name: 'Item1'},
  {name: 'Item2'},
  {name: 'Item3'},
  {name: 'Item4'},
];

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(inputs.map(c => false));

  const handleToggle = (index: number) => () => {
    let checkedInputs = [...checkedBoxes];
    if (index === 0) {
      checkedInputs = checkedBoxes[0] ? checkedInputs.map(c => false) : checkedInputs.map(c => true);
    } else {
      checkedInputs[index] = !checkedInputs[index];
    }
    setCheckedBoxes(checkedInputs);
  };

  return (
    <div className="App">
      {
        inputs && inputs.map((c: CheckboxLabel, i: number) => (
          <li key={i}>
              <input type="checkbox" onChange={handleToggle(i)} className="checkbox" checked={checkedBoxes[i]} />
              <label>{c.name}</label>
          </li>
      ))
      }
    </div>
  );
}

export default App;
