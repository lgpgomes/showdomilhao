import React from 'react'
import './Questions.css'
import logo from '../img/sm.png'

const Questions = () => {
  return (
    <div className='questions-wrapper'>
        <div className='questions'>
            <div className='header'>
                <img className='logo-sm' src={logo} alt="logotipo"/>
                <div>Qual a capital da Bahia?</div>
            </div>

            
            <div className='options'>


                
                <input className='d-none' type="radio" name="questions" id="question_4"/>
                <label for="question_4" className='option'>
                    <div className='option-number-wrapper'>
                        <div className='option-number'>
                            <div className='number'>
                                4
                            </div>
                            
                        </div>
                    </div>

                    <div className='option-answer'>
                        Manaus
                    </div>
                </label>
            </div>

        </div>
    </div>
  )
}

export default Questions