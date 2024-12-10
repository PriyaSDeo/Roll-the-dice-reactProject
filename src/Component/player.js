import React, { useEffect, useState } from 'react';
import './player.css';


function Player() {
const [score1,setScore1]=useState(0);
const [score2,setScore2]=useState(0);
const [currentScore1,setCurrentScore1]=useState(0);
const [currentScore2,setCurrentScore2]=useState(0);
const [count ,setCount]=useState(1)
const [winner,setWinner]=useState(null);
const [myColor1,setColor1]=useState(null)
const [myColor2,setColor2]=useState(null)
const [startPlayer1,setStartPlayer1]=useState(0)
const [startPlayer2,setStartPlayer2]=useState(0)
//const [startPointer,setStartPointer]=useState('pointer')
const [startpointer,setStartPointer]=useState(null)
const [Pvisible,setVisible]=useState('visible')
const [dice,setDice]=useState(null)

const changeScore=()=>{ //It will Change the score after Clicking Roll Dice


if(startpointer=='disabled'){
    const randInt = Math.floor(Math.random()*6+1)
    const countTemp=count;
    const array=['one','two','three','four','five','six'];
    setDice("fas fa-dice-"+array[randInt-1]+"  fa-large" );
    setWinner(null)
        
        if(count%2==1){ //For Player 1
            if(startPlayer1!=0 || randInt==6){  // to increase Score of Player 1 and to change Background color
                const temp=score1
                setCurrentScore1(randInt)
                if(randInt!=3){setScore1(temp+randInt)}// condition for Dice roll not 3 
                setColor1('green');
                setColor2('lightgreen')
                setStartPlayer1(1)

            } 
            else{       //Initial Condition of dice should be 6 for Player 1
                setCurrentScore1(randInt)
                setColor1('green');
                setColor2('lightgreen')
            }  
        }
        if(count%2==0){ //For Player 2
            if(startPlayer2!=0 || randInt==6){ // to increase Score of Player 2 and to change Background color
                const temp=score2
                setCurrentScore2(randInt)
                if(randInt!=3){setScore2(temp+randInt)} // condition for Dice roll 3 
                setColor2('green');
                setColor1('lightgreen');
                setStartPlayer2(1);
            }
            else{       //Initial Condition of dice should be 6 for Player 2
                setCurrentScore2(randInt)
                setColor2('green');
                setColor1('lightgreen');
            }
        }
    
        console.log(score1,"        ",score2)
        
        if(randInt!=6){ //if dice number is not 6 increase the count
            setCount(countTemp+1);
        }
        else{
            if(count%2==1){
                setColor2('green');
                setColor1('lightgreen');
            }
            else{
                setColor1('green');
                setColor2('lightgreen')

            }
        }
        if(score1>99 || score2>99){ //Winning condition
            
            if(score1>99){
                setWinner("Winner is Player1")
            }
            else{
                setWinner("Winner is Player2")
            }
            
            setCount(1);
            setScore1(0);
            setScore2(0);
            setCurrentScore1(0);
            setCurrentScore2(0);
            setStartPlayer1(0);
            setStartPlayer2(0);
        }

}


   
}

const playAgain=()=>{  //On Clicking Restart Button
        setCount(1);
        setScore1(0);
        setScore2(0);
        setCurrentScore1(0);
        setCurrentScore2(0);
        setStartPlayer1(0);
        setStartPlayer2(0);
        setWinner(null)
}
const startGame=()=>{ //To start Game
   // setStartPointer('none');
   setStartPointer('disabled');
    setVisible('hidden')
    setColor1('lightGreen');
    setColor2('green')
}

  return (
    <div className='container'>
        <p style={{visibility:Pvisible}}>Click Start Game to Start The Game</p>
    <div className='myPlayer' >
        
        
            <div className='Player' style={{backgroundColor:myColor1}}>
                <div className='playerInfo'>
                    <h2 className='totalScoreLable'>Total Score </h2>
                    <p className='playerName'>Player1</p>
                    
                    <p className='totalScore'>{score1}</p>
                </div>
                <div className='playerScore'>
                    <h2 className='currentScoreLable'>CURRENT SCORE</h2>
                    <p className='currentScore'>{currentScore1}</p>
                </div>
                
                
            </div>
            <div className='Player' style={{backgroundColor:myColor2}}>
                <div className='playerInfo'>
                    <h2 className='totalScoreLable'>Total Score </h2>
                    <p className='playerName'>Player2</p>
                    
                    <p className='totalScore'>{score2}</p>
                </div>
                <div className='playerScore'>
                    <h2 className='currentScoreLable'>CURRENT SCORE</h2>
                    <p className='currentScore'>{currentScore2}</p>

                </div>
        
        
            </div>
       
        {/*<button className='start btn btn-default' onClick={startGame} style={{cursor:startPointer}}>Start Game</button> */}

        <button className='start btn btn-default' onClick={startGame} startpointer>Start Game</button>
        <button className='restart btn btn-default' onClick={playAgain}>Restart</button>
        <i className={dice}  id="diceImg" />
        <button className='roll btn btn-default' onClick={changeScore}>Roll Dice</button>
        <p className='winner'>{winner}</p>

     
    </div>
  
    </div>
  );
}

export default Player;
