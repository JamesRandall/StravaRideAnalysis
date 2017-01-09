import React from 'react';

const TitleLabel = ({text, subtitle, className}) => {
    const subtitleTag = subtitle ? (
        subtitle instanceof Date ? <span className="subtitle-label"> - {subtitle.toDateString()}</span> : <span className="subtitle-label"> - {subtitle}</span>) : undefined
    return <p className={className}>
        <span className="title-label">{text}</span>
        {subtitleTag}
    </p>
}

TitleLabel.propTypes = {
    text: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    className: React.PropTypes.string
}

export default TitleLabel
