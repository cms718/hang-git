import React from 'react'
import './Notification.css';
const Notification = ({ showNotification }) => {
  return ( // $ = template-literal
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p className = 'letters'> You have already entered this letter </p>
    </div>
  )
}

export default Notification

/// IN REACT, why do we use " ` " ????