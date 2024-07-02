  import ForgeReconciler from '@forge/react';
  import { router } from '@forge/bridge';
  import React from 'react';
  import {
    Form,
    FormHeader,
    FormSection,
    FormFooter,
    Label,
    RequiredAsterisk,
    Textfield,
    Button,
  } from "@forge/react";
  
  const onClickSubmit = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/3571742/Create+an+Event');
  }
  
  const App = () => {
  
    return (
      <Form>
        <FormHeader title="Sign up for an event">
          Required fields are marked with an asterisk <RequiredAsterisk />
        </FormHeader>
        <FormSection>
          <Label>
            First Name
            <RequiredAsterisk />
          </Label>
          <Textfield/>
  
          <Label>
            Last Name
            <RequiredAsterisk />
          </Label>
          <Textfield/>
  
          <Label>
            Email
            <RequiredAsterisk />
          </Label>
          <Textfield/>
  
          <Label>
            Event
            <RequiredAsterisk />
          </Label>
          <Textfield/>
  
          <Label>
            Phone Number
          </Label>
          <Textfield/>
  
          <Label>
            Availability (Days/Times)
            <RequiredAsterisk />
          </Label>
          <Textfield/>
  
          <Label>
            Emergency Contact Name
            <RequiredAsterisk />
          </Label>
          <Textfield/>

          <Label>
            Emergency Contact Number
            <RequiredAsterisk />
          </Label>
          <Textfield/>
        </FormSection>
        <FormFooter>
          <Button appearance="primary" type="submit" onClick={onClickSubmit}>
            Submit
          </Button>
        </FormFooter>
      </Form>
    );
  };
    
  
  ForgeReconciler.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );