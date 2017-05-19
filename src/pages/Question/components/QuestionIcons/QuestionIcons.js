import React from 'react';
import PropTypes from 'prop-types';

const icons = [{
    header: 'Strongly Disagree',
    inactive: 'thumb-down-grey',
    active: 'thumb-down-red',
}, {
    inactive: 'a-bit-no-grey',
    active: 'a-bit-no-red'
}, {
    header: 'Neither Agree or Disagree',
    inactive: 'whatever-sign-grey',
    active: 'whatever-sign-yellow'
}, {
    inactive: 'a-bit-yes-grey',
    active: 'a-bit-yes-green'
}, {
    header: 'Strongly Agree',
    inactive: 'thumb-up-grey',
    active: 'thumb-up-green'
}];

export default function QuestionConfirmation ({
    qKey,
    hovered = null,
    showHeaders = false,
    onClick = () => {},
    onMouseOver = () => {},
    onMouseOut = () => {}
}) {
    return (
        <div className='answersContainer'>
            {icons.map((icon, aKey) => (
                <div className='answer clickable' key={aKey}>
                    {showHeaders ? <h4 className='header'>{icon.header || ''}</h4> : null}
                    <img
                        className='image'
                        alt='thumb'
                        src={require(`../../../../static/images/question/${hovered === aKey ? icon.active : icon.inactive}.png`)}
                        onClick={onClick(qKey, aKey)}
                        onMouseOver={onMouseOver(aKey)}
                        onMouseOut={onMouseOut}
                    />
                </div>
            ))}
        </div>
    );
}

QuestionConfirmation.propTypes = {
    qKey: PropTypes.number,
    onClick: PropTypes.func,
    showHeaders: PropTypes.bool,
    hovered: PropTypes.number,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func
};
