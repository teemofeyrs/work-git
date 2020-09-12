import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
/*import Home from './components/Content/contentElem/Home/Home'*/
import Companies from './components/Content/contentElem/Companies/Companies'
import Projects from './components/Content/contentElem/Projects/Projects'
import Profiles from './components/Content/contentElem/Profiles/Profiles'
import Jobs from './components/Content/contentElem/Jobs/Jobs'
/*import Mass from './components/Content/contentElem/Messages/Mass'*/
/*import UserProfile from './components/Content/contentElem/UserPersonalPage/UserProfile'*/
import AuthMe from './components/Auth/AuthMe'
import { connect } from 'react-redux'
import { toInitialize } from './redux/reducers/appRedusers'
import { compose } from 'redux'
import { gerInitApp, getIsAuth, getMyId } from './redux/selectors/selectors'
import Preloader from './components/Content/Parts/Preloader/Preloader'
import { indificateMe } from './redux/reducers/myProfileReducers'
import { auth } from './redux/reducers/authorizationReducers'

/*lazy loading*/
const Mass = React.lazy(() => import('./components/Content/contentElem/Messages/Mass'));
const UserProfile = React.lazy(() => import('./components/Content/contentElem/UserPersonalPage/UserProfile'));
const Home = React.lazy(() => import('./components/Content/contentElem/Home/Home'));

class App extends React.PureComponent {

  constructor (props) {
    super(props)
    this.toInitialize = this.props.toInitialize
    this.state = {toggleSettings: false}
  }

  componentDidMount () {
    this.toInitialize()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.initApp !== this.props.initApp) this.props.indificateMe(this.props.myId)
    if (prevProps.isAuth !== this.props.isAuth) {

    }
  }

  setToggleSettings = (target) => {
    if (target.id !== 'toggleSettings' && this.state.toggleSettings === true) {
      this.setState({toggleSettings: false})
    } else if (target.id === 'toggleSettings' || target.className === 'userName' || target.id === 'userToggleImg') {
      this.setState({
        toggleSettings: !this.state.toggleSettings
      })
    }
  }

  render () {
    if (!this.props.initApp && !this.props.isAuth) {
      return <AuthMe/>
    }
    if (!this.props.initApp) {
      return <Preloader/>
    }
    return (
      <Router>
        <div className={'App'} onClick={({target}) => {this.setToggleSettings(target) }}>
          <Route path='/login' exact><AuthMe/></Route>
          <Header toggleSettings={this.state.toggleSettings}/>
          <div className='content'>
            <Switch>
              <>
                <Route path='/' exact>
                  <Suspense fallback={<Preloader/>}><Home/>
                  </Suspense>
                </Route>
                <Route path='/companies'><Companies/></Route>
                <Route path='/projects'><Projects/></Route>
                <Route path='/profiles'><Profiles/></Route>
                <Route path='/jobs'><Jobs/></Route>
                <Route path='/messages'>
                  <Suspense fallback={<Preloader/>}>
                    <Mass/>
                  </Suspense></Route>
                <Route path='/user-profile/:userId?'>
                  <Suspense fallback={<Preloader/>}>
                    <UserProfile/>
                  </Suspense>
                </Route>
              </>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    initApp: gerInitApp(state),
    myId: getMyId(state),
    isAuth: getIsAuth(state),
  }
}
export default compose(
  connect(mapStateToProps, {auth, toInitialize, indificateMe}))(App)
