import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ScoreIndicator from './Component/ScoreIndicator';
import Badge from 'react-bootstrap/Badge';


function App() {
  const [player, setPlayer] = useState(1)
  const [totalScore1, setTotalScore1] = useState(501);
  const [totalScore2, setTotalScore2] = useState(501);
  const [totalScore3, setTotalScore3] = useState(501);
  const [totalScore4, setTotalScore4] = useState(501);
  const [numberDart, setNumberDart] = useState(0);
  const [multiplicator, setMultiplicator] = useState(0);
  const [turn, setTurn] = useState(1);

  console.log(numberDart)

  const countScore = (value) => {
    console.log("J" + player)
    switch (player) {
      case 1: 
        if (numberDart < 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore1) {
              alert("Dommage, joueur suivant !");
              setPlayer(2);
              setNumberDart(0);
            } else {
              setTotalScore1(totalScore1 - (value * multiplicator));
            }
          } else if (value > totalScore1) {
            alert("Dommage, joueur suivant !");
            setPlayer(2);
            setNumberDart(0);
          } else {
            setTotalScore1(totalScore1 - value);
          }
          setMultiplicator(0);
          setNumberDart(numberDart + 1);
        } else if (numberDart == 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore1) {
              alert("Dommage, joueur suivant !");
              setPlayer(2);
              setNumberDart(0);
            } else {
              setTotalScore1(totalScore1 - (value * multiplicator));
              setPlayer(2);
              setNumberDart(0);
            }
          } else if (value > totalScore1) {
            alert("Dommage, joueur suivant !");
            setPlayer(2);
            setNumberDart(0);
          } else {
            setTotalScore1(totalScore1 - value);
            setPlayer(2);
            setNumberDart(0);
          }
        }
        break;
      case 2: 
        if (numberDart < 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore2) {
              alert("Dommage, joueur suivant !");
              setPlayer(3);
              setNumberDart(0);
            } else {
              setTotalScore2(totalScore2 - (value * multiplicator));
            }
          } else if (value > totalScore2) {
            alert("Dommage, joueur suivant !");
            setPlayer(3);
            setNumberDart(0);
          } else {
            setTotalScore2(totalScore2 - value);
          }
          setMultiplicator(0);
          setNumberDart(numberDart + 1);
        } else if (numberDart == 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore2) {
              alert("Dommage, joueur suivant !");
              setPlayer(3);
              setNumberDart(0);
            } else {
              setTotalScore2(totalScore2 - (value * multiplicator));
              setPlayer(3);
              setNumberDart(0);
            }
          } else if (value > totalScore2) {
            alert("Dommage, joueur suivant !");
            setPlayer(3);
            setNumberDart(0);
          } else {
            setTotalScore2(totalScore2 - value);
            setPlayer(3);
            setNumberDart(0);
          }
        }
        break;
      case 3: 
        if (numberDart < 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore3) {
              alert("Dommage, joueur suivant !");
              setPlayer(4);
              setNumberDart(0);
            } else {
              setTotalScore3(totalScore3 - (value * multiplicator));
            }
          } else if (value > totalScore3) {
            alert("Dommage, joueur suivant !");
            setPlayer(4);
            setNumberDart(0);
          } else {
            setTotalScore3(totalScore3 - value);
          }
          setMultiplicator(0);
          setNumberDart(numberDart + 1);
        } else if (numberDart == 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore3) {
              alert("Dommage, joueur suivant !");
              setPlayer(4);
              setNumberDart(0);
            } else {
              setTotalScore3(totalScore3 - (value * multiplicator));
              setPlayer(4);
              setNumberDart(0);
            }
          } else if (value > totalScore3) {
            alert("Dommage, joueur suivant !");
            setPlayer(4);
            setNumberDart(0);
          } else {
            setTotalScore3(totalScore3 - value);
            setPlayer(4);
            setNumberDart(0);
          }
        }
        break;
      case 4: 
        if (numberDart < 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore4) {
              alert("Dommage, joueur suivant !");
              setPlayer(1);
              setTurn(turn +1);
              setNumberDart(0);
            } else {
              setTotalScore4(totalScore4 - (value * multiplicator));
            }
          } else if (value > totalScore4) {
            alert("Dommage, joueur suivant !");
            setPlayer(1);
            setTurn(turn +1);
            setNumberDart(0);
          } else {
            setTotalScore4(totalScore4 - value);
          }
          setMultiplicator(0);
          setNumberDart(numberDart + 1);
        } else if (numberDart == 2) {
          if (multiplicator !== 0) {
            if (multiplicator == 3 && value == 25) {
              alert('Tricheur');
            } else if (value * multiplicator > totalScore4) {
              alert("Dommage, joueur suivant !");
              setPlayer(1);
              setTurn(turn +1);
              setNumberDart(0);
            } else {
              setTotalScore4(totalScore4 - (value * multiplicator));
              setPlayer(1);
              setTurn(turn +1);
              setNumberDart(0);
            }
          } else if (value > totalScore4) {
            alert("Dommage, joueur suivant !");
            setPlayer(1);
            setTurn(turn +1);
            setNumberDart(0);
          } else {
            setTotalScore4(totalScore4 - value);
            setPlayer(1);
            setTurn(turn +1);
            setNumberDart(0);
          }
        }
        break;
    }
  };
  

  return (
    <> 
    <div className='d-flex flex-column justify-content-center '>
    <div className='d-flex justify-content-center'>
      <h1>
        Tour n° <Badge bg="secondary">{turn}</Badge>
      </h1>
      </div>
    <Container>
  
       <div className='d-flex flex-row justify-content-between '>
        <InputGroup className="mb-3 ">
          <InputGroup.Text id="basic-addon1">J1</InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={totalScore1}
          />
        </InputGroup>
        

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">J2</InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={totalScore2}
          />
        </InputGroup>



        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">J3</InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={totalScore3}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">J4</InputGroup.Text>
          <Form.Control
            disabled
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={totalScore4}
          />
        </InputGroup>
   
    

        </div>
      </Container>
      </div>

        <Container className='d-flex align-items-center'>
        <div className="d-flex justify-content-center flex-wrap align-items-center">
          <Button variant="success" className='col-3' onClick={() => countScore(1)}>1</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(2)}>2</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(3)}>3</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(4)}>4</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(5)}>5</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(6)}>6</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(7)}>7</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(8)}>8</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(9)}>9</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(10)}>10</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(11)}>11</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(12)}>12</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(13)}>13</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(14)}>14</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(15)}>15</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(16)}>16</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(17)}>17</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(18)}>18</Button>
          <Button variant="success" className='col-3' onClick={() => countScore(19)}>19</Button>
          <Button variant="danger" className='col-3' onClick={() => countScore(20)}>20</Button>
          <Button variant="primary" className='col-3' onClick={() => countScore(25)}>BULL</Button>
          <Button variant="outline-secondary col-3" onClick={() => setMultiplicator(1)}>Single</Button>
          <Button variant="outline-primary col-2" onClick={() => setMultiplicator(2)}>Double</Button>
          <Button variant="outline-danger col-2" onClick={() => setMultiplicator(3)}>Triple</Button>
          <Button variant="outline-warning col-2" onClick={()=> countScore(0)}>Miss</Button>
          </div>
        </Container>

     
    </>
  );
}

export default App;
