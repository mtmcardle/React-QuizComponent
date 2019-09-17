import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'
//import { prependOnceListener } from 'cluster'

class QuizQuestion extends Component {
  constructor (props) {
    super(props)
    this.state = {incorrectAnswer: false}
  }

  handleClick(buttonText) {
    const buttonIsAnswer = (buttonText === this.props.quiz_question.answer)

    if (buttonIsAnswer) {
      this.props.showNextQuestionHandler()
      this.state.incorrectAnswer = false
    }
    else {
      this.state.incorrectAnswer = true
    }
  }
  
    render(props) {
        return (
            <main>
              <section>
                <p>{this.props.quiz_question.instruction_text}</p>
              </section>
              <section className="buttons">
                <ul>
                  {this.props.quiz_question.answer_options.map((answer_option,  index) => {
                    return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
                  })}
                </ul>
              </section>
              {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right.</p> : null}
          </main>
        )
    }
}

export default QuizQuestion
