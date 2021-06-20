import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const BallsCounter = ({ balls }) => (
    <Button variant="outline-secondary">Contador: {balls.length}</Button>
)

const mapStateToProps = state => ({
    balls: state.counterReducer.balls
})

export default connect(mapStateToProps, {})(BallsCounter)