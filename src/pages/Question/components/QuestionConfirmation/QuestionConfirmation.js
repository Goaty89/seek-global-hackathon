import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Button from '../../../../components/Button/Button';

export default function QuestionConfirmation ({id, nextLink}) {
    return (
        <div className='confirmation'>
            <Link className='previewLink' to={`/preview/${id}`}>
                <h1>Preview</h1>
            </Link>
            <Button url={nextLink}>Next</Button>
        </div>
    );
}

QuestionConfirmation.propTypes = {
    id: PropTypes.number,
    nextLink: PropTypes.string
};
