import PropTypes from 'prop-types'
import './Header.css'

const Header = ({name}) => {
  
    return (
        <header>
           <h1>Draw & Guess</h1>
           <div className='userName'>{name}</div>
        </header>
    )
}


Header.prototype={
    name: PropTypes.string.isRequired
}


export default Header
