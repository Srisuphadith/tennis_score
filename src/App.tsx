import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scoreL, setCountL] = useState(0)
  const [scoreR, setCountR] = useState(0)
  const [L, setL] = useState(0)
  const [R, setR] = useState(0)
  const [turn, setTurn] = useState(0)
  const [serve, setServe] = useState(0)
  const [st, setSt] = useState(1)
  let L_dis = 0
  let R_dis = 0
  useEffect(() => {
    change_serve_dis(serve, turn)
    if(st){
    if(L == R && L%3 == 0 && R%3 == 0 && L != 0 && R != 0){
      document.getElementById("due")!.innerText = "DUE";
      document.getElementById("due")!.style.display = "block";
      setSt(0)
    }else{
      document.getElementById("due")!.style.display = "none";
    }
  }else{
    if(L-R == 2){
      document.getElementById("due")!.innerText = "Blue win";
      setSt(1)
      setL(0)
      setR(0)
      setCountR(0)
      setCountL(0)
    }
    if(R-L == 2){
      document.getElementById("due")!.innerText = "Red win";
      setSt(1)
      setL(0)
      setR(0)
      setCountR(0)
      setCountL(0)
    }
  }
  }, [serve, turn])
  function change_serve_dis(side: number, turn: number) {
    if (side == 1) {
      //red
      if (turn % 2 == 0) {
        document.getElementById("con_right3")!.style.backgroundColor = "#ff6767ff";
        document.getElementById("con_right4")!.style.backgroundColor = "red";
      } else {
        document.getElementById("con_right3")!.style.backgroundColor = "red";
        document.getElementById("con_right4")!.style.backgroundColor = "#ff6767ff";
      }
    } else if (side == 2) {
      //blue
      if (turn % 2 == 1) {
        document.getElementById("con_left1")!.style.backgroundColor = "#676affff";
        document.getElementById("con_left2")!.style.backgroundColor = "blue";
      } else {
        document.getElementById("con_left1")!.style.backgroundColor = "blue";
        document.getElementById("con_left2")!.style.backgroundColor = "#676affff";
      }
    }
  }
  function Lhandle() {
    setTurn(turn + 1)
    setL(L+1)
    setCountL(() => {
      switch (scoreL) {
        case 0: L_dis = scoreL + 15; break;
        case 15: L_dis = scoreL + 15; break;
        case 30: L_dis = scoreL + 10; break;
        case 40: L_dis = 0; break;
      }
      return L_dis
    })

    //change_serve_dis(serve, turn)
  }
  function Rhandle() {
    setTurn(turn + 1)
    setR(R+1)
    setCountR(() => {
      switch (scoreR) {
        case 0: R_dis = scoreR + 15; break;
        case 15: R_dis = scoreR + 15; break;
        case 30: R_dis = scoreR + 10; break;
        case 40: R_dis = 0; break;
      }
      return R_dis
    })

    //change_serve_dis(serve, turn)
  }
  function serveRedHadle() {
    setServe(1)
    document.getElementById("serveR")!.style.backgroundColor = "red";
    document.getElementById("serveB")!.style.backgroundColor = "#a0a0a0";
    document.getElementById("con_left1")!.style.backgroundColor = "blue";
    document.getElementById("con_left2")!.style.backgroundColor = "blue";


    //change_serve_dis(serve, turn)
  }
  function serveBlueHadle() {
    setServe(2)
    document.getElementById("serveR")!.style.backgroundColor = "#a0a0a0";
    document.getElementById("serveB")!.style.backgroundColor = "blue";
    document.getElementById("con_right3")!.style.backgroundColor = "red";
    document.getElementById("con_right4")!.style.backgroundColor = "red";

    //change_serve_dis(serve, turn)
  }

  return (
    <>
      <div className='serve'>
        <p>Select serve</p>
        <button id='serveB' onClick={serveBlueHadle}>Blue</button>
        <button id="serveR" onClick={serveRedHadle}>Red</button>

      </div>
      <div className="tnsr">
        <p>Turn</p>
        <p id="tn">{turn}</p>
      </div>
      <div>
        <table id="cort">
          <tbody>
            <tr>
              <td className='left1'>
                <div id="con_left1">1</div>
              </td>
              <td className='right3'>
                <div id="con_right3">3</div>
              </td>
            </tr>
            <tr>
              <td className='left2'>
                <div id="con_left2">2</div>
              </td>
              <td className='right4'>
                <div id="con_right4">4</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="due">
          DUE
      </div>
      <div className="score">
        <div className="left_score" onClick={Lhandle}>{scoreL}</div>
        <div className="right_score" onClick={Rhandle}>{scoreR}</div>

      </div>
    </>

  )
}

export default App
