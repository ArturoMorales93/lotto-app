import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const BallsCounter = ({ balls }) => (
    <Button variant="outline-secondary">Contador: {balls.length}</Button>
)

const mapStateToProps = state => ({
    balls: state.balls
})

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(BallsCounter)