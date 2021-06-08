import React, { Component } from 'react'

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        // eslint-disable-next-line no-useless-constructor
        constructor(props){
            super(props)
        }

        render() {
            return this.props[propValue].data.length === 0
            ? <h2>cargando...</h2>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader