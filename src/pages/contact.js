import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"

const Form = styled.form`
  position: relative;
  display: flex;
`

const Headline = styled.h1`
  font-size: 3.5rem;
  font-family: var(--font-light);
  font-weight: 200;
  color: var(--basic);
  display: block;
  text-align: center;
  margin: 1rem 0;
`

const FormGroup = styled.div`
  width: 50%;
  position: relative;

  div {
    margin-bottom: 30px;
    position: relative;
    padding: 0 1rem;
  }
`

const Input = styled.input`
  height: 60px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 14px;
  color: rgb(99, 105, 106);
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid var(--greyLight);
`

const Label = styled.label`
  position: absolute;
  left: 25px;
  top: 20px;
  background: rgb(255, 255, 255);
  padding: 0px 5px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`
const Button = styled.button`
  display: inline-block;
  background-color: var(--basic);
  border-radius: 3px;
  color: var(--white);
  padding: 1em;
  margin-top: 1rem;
  text-transform: uppercase;
  text-align: center;
  font-size: .75rem;
  min-width: 8rem;
  border: 1px solid var(--basic);
`

const Textarea = styled.textarea`
  width: 100%;
  height: 240px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  font-size: 14px;
  color: rgb(99, 105, 106);
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid var(--greyLight);

  &:focus, &:active {
    outline: none;
    border-color: rgb(255, 210, 209);

    ~ label {
      top: -11px;
    }
  }
`

const Contact = () => (
  <Layout className="content">
    <Headline>Kontakt</Headline>
    <section>
      <Form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <div>
            <Input type="text" name="name" id="name" required />
            <Label for="name">Dein vollständiger Name</Label>
          </div>
          <div>
            <Input type="email" name="email" id="email" required />
            <Label for="email">Deine E-Mail Adresse</Label>
          </div>
          <div>
            <Input type="text" name="subject" id="subject" required />
            <Label for="subject">Betreff</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Textarea name="message" id="message" cols="30" rows="10" required />
          <Label for="message">Deine Nachricht</Label>
          <Button type="submit">Absenden</Button>
        </FormGroup>
      </Form>
    </section>
  </Layout>
)

export default Contact
