import React from 'react'

const InProgressBar = ({inProgress}) => {
    return <div className='inprogresscontainer'>
        <div style={{position: 'absolute', height: '0.3em', width: '25%', backgroundColor: 'rgb(218,235,255)' }} className={inProgress ? 'inprogressanimate inprogressbase' : 'inprogressbase'}></div>
    </div>
}

InProgressBar.propTypes = {
    inProgress: React.PropTypes.bool.isRequired
}

export default InProgressBar