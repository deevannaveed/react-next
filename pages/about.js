import React from 'react'
import Head from 'next/head'
import Main from '../layouts/main'
import { Row, Col } from 'react-bootstrap'

const About = () => (
    <Row>
        <Col>
            <Head>
                <title>About</title>
            </Head>
            <Main>
                <h3 className='h1 text-center mt-5'>Welcome to about page</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </Main>
            <style jsx>{`
    `}</style>
        </Col>
    </Row>
)

export default About