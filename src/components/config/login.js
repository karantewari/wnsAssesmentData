import React, { Component } from 'react';
import './login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class login extends Component {
    render() {
        return (
            //static form as of now
            <div className="container">
                <div className="formContainer">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password..." />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default login;