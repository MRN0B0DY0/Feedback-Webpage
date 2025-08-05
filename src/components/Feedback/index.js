// Write your React code here.
import {Component} from 'react'
import Emotes from '../FeedbackItem'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }

  onClickEmoji = () => {
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))
  }

  render() {
    const {resources} = this.props
    const {isFeedbackGiven} = this.state
    console.log(isFeedbackGiven)

    return isFeedbackGiven ? (
      <div className="thankyou-container">
        <div className="thankyou-card">
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="thankyou-img"
          />
          <h1 className="thankyou-message">Thank You!</h1>
          <p className="thankyou-text">
            We will use your feedback to improve customer feedback <br />
            performance
          </p>
        </div>
      </div>
    ) : (
      <div className="feedback-container">
        <div className="feedback-card">
          <h1 className="feedback-question">
            How satisfied are you with our <br /> customer support performance?
          </h1>
          <ul className="emotes-list">
            {resources.emojis.map(eachItem => (
              <Emotes
                emoteList={eachItem}
                onClickEmoji={this.onClickEmoji}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Feedback
