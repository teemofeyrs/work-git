import React from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {logOut} from "../../../redux/reducers/authorizationReducers";
import {compose} from "redux";
import {AuthRedirect} from "../../../HOC/authRedirect";

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
        myInfo: { ...state.myInfo},
    };
}
export default compose( connect(mapStateToProps, { logOut }),
    AuthRedirect
    )(NavigationContainer);
