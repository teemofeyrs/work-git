import React from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import { logOut } from '../../../redux/reducers/authorizationReducers'
import { compose } from 'redux'
import { AuthRedirect } from '../../../HOC/authRedirect'
import { getMyInfo } from '../../../redux/selectors/selectors'

class NavigationContainer extends React.Component {
    render() {
        return (
            <Navigation toggleSettings={this.props.toggleSettings}
                        myInfo={this.props.myInfo}
                        logOut={this.props.logOut}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        myInfo: getMyInfo(state),
    };
}
export default compose( connect(mapStateToProps, { logOut }),
    AuthRedirect
    )(NavigationContainer);
