import React from 'react'

const Status = ({status, editMode,setStatus, ChangeStatus, SetNewStatus}) => {
  let handlerStatusChange = (e) => {
    let newValue = e.target.value;
    setStatus(newValue)
  }
    if (!editMode) {
    return <span onClick={ChangeStatus}>{status || 'No Status'}</span>
  }else{
      return <input autoFocus={true}
                    onChange={ (e) => {handlerStatusChange(e)}}
                    onBlur={SetNewStatus} type='text' value={status}/>
  }
};
export default Status;