import React from 'react'
import { Container, Image } from 'react-bootstrap'

const pic = "https://loveworldbooks.com/media-distributor/public/images/LWPL2-Logo.png";

const Header = () => {
    return (
        <Container fluid>
            <Image src={pic} width='250px' className='img' />
        </Container>
    )
}

export default Header
