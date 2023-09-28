import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
        <div className={`alert alert-${alert.type}`} >
            <i className='fa fa-circle-o-notch fa-spin' /> {alert.msg}
            
        </div>
  )
  );
};

export default Alert
