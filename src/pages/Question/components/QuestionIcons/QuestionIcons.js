import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionConfirmation ({icons, qKey = -1, answers = [], onClick = () => {}}) {
    return (
        <div className='answersContainer'>
            {icons.map((icon, aKey) => (
                <div className='answer clickable' key={aKey}>
                    <img
                        className='image'
                        alt='thumb'
                        src={`/images/question/${qKey !== -1 && aKey === answers[qKey] ? icon.active : icon.inactive}.png`}
                        onClick={onClick(qKey, aKey)}
                    />
                </div>
            ))}
        </div>
    );
}

QuestionConfirmation.propTypes = {
    icons: PropTypes.array,
    qKey: PropTypes.number,
    onClick: PropTypes.func,
    answers: PropTypes.array
};
