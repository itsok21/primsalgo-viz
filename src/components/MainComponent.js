import React, { Component } from 'react'
import ShortestPath from './ShortestPath'
import {NavLink, Switch, Route,Redirect} from 'react-router-dom'

export class MainComponent extends Component {
    render() {
        return (
                <Switch>
                    <Route path='/PrimMST' component={ShortestPath}/>
                    <Redirect to='/PrimMST' />
                </Switch>
        )
    }
}

export default MainComponent
