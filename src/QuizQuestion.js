import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'
//import { prependOnceListener } from 'cluster'

class QuizQuestion extends Component {
    render(props) {
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                  <li><QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} /></li>
              </ul>
            </section>
          </main>
        )
    }
}

export default QuizQuestion
