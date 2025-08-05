import './index.css'

const Emotes = props => {
  const {emoteList, onClickEmoji} = props
  const {name, imageUrl} = emoteList

  const emotebtn = () => {
    onClickEmoji()
  }

  return (
    <li>
      <button type="button" className="emote-item" onClick={emotebtn}>
        <img src={imageUrl} alt={name} className="emote-img" />
        <p className="emote-name">{name}</p>
      </button>
    </li>
  )
}

export default Emotes
