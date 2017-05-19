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
    showHeaders = false,
    answers = [],
    onClick = () => {}
}) {
    return (
        <div className='answersContainer'>
            {icons.map((icon, aKey) => (
                <div className='answer clickable' key={aKey}>
                    {showHeaders ? <h4 className='header'>{icon.header || ''}</h4> : null}
                    <img
                        className='image'
                        alt='thumb'
                        src={require(`../../../../static/images/question/${qKey !== -1 && aKey === answers[qKey] ? icon.active : icon.inactive}.png`)}
                        onClick={onClick(qKey, aKey)}
                    />
                </div>
            ))}
        </div>
    );
}

QuestionConfirmation.propTypes = {
    qKey: PropTypes.number,
    onClick: PropTypes.func,
    answers: PropTypes.array,
    showHeaders: PropTypes.bool
};
