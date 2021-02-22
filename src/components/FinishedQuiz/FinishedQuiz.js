import React from 'react'
import Button from '../UI/Button/Button';

import {Link} from 'react-router-dom';

import './FinishedQuiz.css'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={'FinishedQuiz'}>
            <ul>
                {  props.quiz.map((quizItem, index)=> {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times error' : 'fa-check success'
                    ]

                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                }) }
            </ul>

            <p>Правильно { successCount } из { props.quiz.length }</p>

            <div>
                <Button onClick={props.onRetry} type="primary_btn">Повторить</Button>
                <Link to='/'>
                    <Button onClick={props.onRetry} type="success_btn">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz