import React from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import {auth} from "../../../redux/reducers/authorizationRedusers";

class NavigationContainer extends React.Component {

    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <Navigation {...this.props}/>
        );
    }
}

let mapStateToProps = ({auth}) => {
    return {
    isAuth: auth.isAuth
    };
}
export default connect(mapStateToProps, { auth })(NavigationContainer);
