import React from 'react';
import PropTypes from 'prop-types';

const Error = ({msg}) => {
    return ( 
        <p className='alert alert-primary text-center p-2 text-uppercase'>{msg}</p>
     );
}

Error.propTypes = {
    msg: PropTypes.string.isRequired
}
 
export default Error;