"use client"

import { Button } from '@/components/ui/button';
import React, { use, useEffect, useState } from 'react'

interface QuizProps{
    questions:{
        question:string;
        answers:string[];
        correctAnswers:string;
    }[];
    userId:string | undefined;
}

const Quiz = ({questions,userId}:QuizProps) => {

    const [activeQuestion, setActiveQuestion]=useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [checked, setChecked] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)

    const[showResult,setShowResult] = useState(false)
    const [results,setResults] = useState({
        score:0,correctAnswers:0,wrongAnswers:0,
    })

    const {answers,correctAnswers,question} = questions[activeQuestion]

    const [timeRemaining,setTimeRemaining] = useState(2500)
    const [timerRunning, setTimerRunnning] = useState(false)

    const handleTimeUp=()=>{
        stopTimer()
        resetTimer()
    }

    useEffect(()=>{
        let timer :NodeJS.Timeout;
        if(timerRunning && timeRemaining >0){
            timer = setTimeout(() => {
               setTimeRemaining((prevTime)=>prevTime-1) 
            }, 1000);
        }else if (timeRemaining === 0){
            handleTimeUp()
        }
        return ()=>clearTimeout(timer)
    },[timerRunning,timeRemaining])

    const startTimer =()=>{
        setTimerRunnning(true)
    }

    const stopTimer =()=>{
        setTimerRunnning(false)
    }

    const resetTimer =()=>{
        setTimeRemaining(25)
    }


    useEffect(()=>{
        startTimer()
        return()=>{
            stopTimer();
        }
    },[])

    /// event

    const onAnswerSelected = (answer:string, idx:number)=>{

    }

  return (
    <div className="min-h-[600px]">

        <div className='max-w-[1500px] mx-auto w-[90%] flex flex-col justify-center py-10'>

            {!showResult ?
            (
                <div>
                    <div className='flex justify-between items-center mb-10'>

                        <div className='bg-mycolor-400 text-white px-4 rounded-lg py-1'>
                            <h2>
                                Question {activeQuestion +1}
                                <span>/{questions.length}</span>
                            </h2>
                        </div>

                        <div className='bg-mycolor-400 text-white px-4 rounded-lg py-1'>

                            {timeRemaining} seconds to answer

                        </div>

                    </div>

                    <div>

                        <h3 className='mb-5 text-2xl font-bold text-mycolor-300'>
                            {question}
                        </h3>

                        <ul>
                            {answers.map((answer:string, idx:number)=>(
                                <li key={idx} onClick={()=>onAnswerSelected(answer, idx)} 
                                
                                className={`cursor-pointer mb-5 px-4 p-2 py-3 border text-white border-white rounded-lg hover:bg-mycolor-100 

                                    ${parseInt(selectedAnswer) === idx && "text-white bg-sky-700/60 font-semibold"}
                                `}
                                >
                                    <span>{answer}</span>
                                </li>
                            ))}
                        </ul>

                            <Button variant={"nextquestion"} size={"xl"}>
                                {activeQuestion === questions.length-1 ? "Finish" : "Next Question"} 
                            </Button>

                    </div>

                </div>
            ):(
                <div>
                    Result
                </div>
            )
        
        }

        </div>

    </div>
  )
}

export default Quiz