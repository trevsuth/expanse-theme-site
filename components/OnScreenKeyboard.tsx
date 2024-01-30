import React from 'react';

const keysRow0 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const keysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const Key = ({ value }) => (
  <button className="key">{value}</button>
);

const OnScreenKeyboard = () => {
  return (
    <div className="keyboard">
      <div className="keys-row">
        {keysRow0.map(key => <Key key={key} value={key} />)}
      </div>
      <div className="keys-row">
        {keysRow1.map(key => <Key key={key} value={key} />)}
      </div>
      <div className="keys-row">
        {keysRow2.map(key => <Key key={key} value={key} />)}
      </div>
      <div className="keys-row">
        {keysRow3.map(key => <Key key={key} value={key} />)}
      </div>
    </div>
  );
};

export default OnScreenKeyboard;
