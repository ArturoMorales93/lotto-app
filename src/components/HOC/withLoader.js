import React, { Component } from 'react'

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        render() {
            return this.props[propValue].length === 0
            ? <h2>cargando...</h2>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader