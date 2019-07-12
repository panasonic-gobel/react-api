import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Recipe from './components/Recipe'
import Login from './components/login'

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/Recipe' component={Recipe} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App
