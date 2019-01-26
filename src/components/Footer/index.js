import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './index.css';

const Footer = () => {
    return (
        <MDBFooter color="black" className="font-medium pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">About</h5>
                        <p>
                            This API provides you information about movies which have "...Robin Hood..."
                            into their titles.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Norsse
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;