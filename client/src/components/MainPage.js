import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import SignIn from './SignIn';
import SignOut from './SignOut';
// import SignUp from './SignUp';
import Users from './Users';

class MainPage extends Component {
    render(){
        return (
            <Router>
                <div>
                <h1>Welcome!</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/signIn/'>Sign In</Link>
                            </li>
                            <li>
                                <Link to='/signOut/'>Sign Out</Link>
                            </li>
                            <li>
                                <Link to='/signUp/'>Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/items/'>Items</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path='/' exact component={Home} />
                    <Route path='/signIn/' exact component={SignIn} />
                    <Route path='/signOut/' exact component={SignOut} />
                    <Route path='/items/' exact component={Items} />
                </div>
            </Router>
        )
    }
}
export default MainPage;