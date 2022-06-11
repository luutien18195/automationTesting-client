import React from "react";
import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const NotFound = () => (
  <>
    <Container md>
      <h1 align='center' color='textPrimary' variant='h2'>
        404 | NOT FOUND
      </h1>
      <div>
        <h4 align='center' color='textPrimary' variant='h4'>
          The page you are looking for isn’t here
        </h4>
        <h4 align='center' color='textPrimary' variant='subtitle2'>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </h4>
        <div align='center'>
          <img
            alt='Under development'
            src='/static/images/undraw_page_not_found_su7k.svg'
            style={{
              marginTop: 50,
              display: "inline-block",
              maxWidth: "100%",
              width: 560,
            }}
          />
        </div>

        <Link to='/' className='text-reset text-decoration-none'>
          <Button className='d-block mx-auto mt-4'>Go back to dashboard</Button>
        </Link>
      </div>
    </Container>
  </>
);

export default NotFound;
