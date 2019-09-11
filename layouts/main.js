import React from 'react'
import Nav from '../components/nav'
import { Container } from 'react-bootstrap'

const Main = props => (
    <div>
        <Nav />
        <Container fluid>
            {props.children}
        </Container>
    </div>
)

export default Main