import React, { PureComponent } from 'react'
import ProfileInfo from './ProfileInfo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRedirect } from '../../../../HOC/authRedirect'
import { changeStatusOnApi } from '../../../../redux/reducers/profileReducers'
import { getProfileStatus } from '../../../../redux/selectors/selectors'
import { updateDataProfile, updatePhoto } from '../../../../redux/reducers/myProfileReducers'

class ProfileInfoContainer extends PureComponent{
    render() {

        return (
            <ProfileInfo {...this.props}/>
        );
    }
}
let mapDispatchToProps = (state) => {
    return {
        myStatus: getProfileStatus(state)
    }
}
export default compose(
    connect(mapDispatchToProps, {changeStatusOnApi, updatePhoto, updateDataProfile}),
    AuthRedirect
)(ProfileInfoContainer);