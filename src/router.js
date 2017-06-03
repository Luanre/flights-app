/*eslint no-restricted-globals: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute } from './actions'; 
import Containers from './containers';

const mapStateToProps = state => ({
    component: state.router.component
});

const mapDispatchToProps = dispatch => ({
    changeRoute: path => dispatch(changeRoute(path))
});

class Router extends Component {
    componentDidMount() {
        window.addEventListener('hashchange', this.handleHashChange);
        this.handleHashChange();
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleHashChange);
    }

    handleHashChange = () => {
        const path = location.hash.slice(1);
        
        if (path !== this.props.component) {
            this.props.changeRoute(path);
        }
    }

    render() {
        const Component = Containers[this.props.component];

        return this.props.component ? <Component /> : <h1>Loading...</h1>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
