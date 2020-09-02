import React from 'react'
import statusClasses from './Status.module.css';

const Status = ({status, editMode,setStatus, ChangeStatus, SetNewStatus}) => {
  let handlerStatusChange = (e) => {
    let newValue = e.target.value;
    setStatus(newValue)
  }
    if (!editMode) {
    return <span onClick={ChangeStatus} className={statusClasses.status}>{status || 'No Status'}</span>

  }else{
      return <input autoFocus={true}
                    onChange={handlerStatusChange}
                    onBlur={SetNewStatus} type='text' value={status}
                    className={statusClasses.statusInput}/>
  }
};
export default Status;