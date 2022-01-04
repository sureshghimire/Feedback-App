import PropTypes from 'prop-types';

function Header({text}) {
    return (
       
        <header>
            <div className='container'>
            <h1>{text}</h1>
            </div>
            
        </header>
       
    )
}

//This is just to set the default props
// You can set your own header title on Header text='Your Own Title '
Header.defaultProps = {
    text: 'FeedBack UI'
}

//Declaring Prop types
Header.prototype= {
    text: PropTypes.string
}

export default Header
