import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';

function App() {

 const [cvv, setCvv] = useState({showCvv:false});

  const onFocus = () => {
    setCvv({showCvv: true});
    console.log(cvv);
  }

  const onFocusOut = () => {
    setCvv({showCvv: false});
  }

  return (
    <div className="App">
      <div className="card">
        <div className={`credit-card ${cvv.showCvv ? 'active' : ''}`}>
          <div className="card-1">
            <p className="num-card">4152 3133 6182 75689</p>
            <p className="expired">23/21</p>
            <p className="name">Angel Hernandez Martinez</p>
          </div>
          <div className="card-2">
            <p className="cvv">***</p>
          </div>
        </div>
        <form>
          <div className="cont-input">
            <label>
              Numero de tarjeta
            </label>
            <input type="number" />
          </div>

          <div className="cont-input">
            <label>
              Nombre
            </label>
            <input type="text" />
          </div>

          <div className="complementary">
            <div className="cont-input">
              <label htmlFor="">
                Mes
              </label>
              <input type="text" />
            </div>

            <div className="cont-input">
              <label htmlFor="">
                Año
              </label>
              <input type="text" />
            </div>

            <div className="cont-input">
              <label htmlFor="">
                Cvv
              </label>
              <input 
                type="text" 
                onFocus={onFocus}
                onBlur={onFocusOut}
              />
            </div>
          </div>

          <button className="submit" > Enviar </button>
        </form>
      </div>
    </div>
  );
}

export default App;
