import React from 'react'
import classesHome from './Home.module.css'
import ProfileInfoContainer from './ProfileInfoContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getMyId, getMyInfo, getPosts } from '../../../../redux/selectors/selectors'
import { profileStatusInit } from '../../../../redux/reducers/profileReducers'
import Preloader from '../../Parts/Preloader/Preloader'
import Posts from '../Posts/posts/Posts'
import Portfolio from '../../Parts/Portfolio/Portfolio'

class Home extends React.Component {

    componentDidMount() {
        this.props.profileStatusInit(this.props.myId);
    }

    render() {
        const {myInfo, posts} = this.props;
        if(!myInfo.userId) {
            return <Preloader/>
        }
        return (
            <div className={classesHome.home}>
                <ProfileInfoContainer myInfo={myInfo}/>
                <Posts myInfo={myInfo} posts={posts}/>
                <Portfolio/>
            </div>
        );
    }
}
let mapDispatchToProps = (state) => {
    return {
        myInfo: getMyInfo(state),
        myId: getMyId(state),
        posts: getPosts(state),
    }
}
export default compose( connect(mapDispatchToProps, {profileStatusInit }))(Home);