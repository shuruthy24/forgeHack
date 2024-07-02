import React, { useEffect, useState, useForm } from 'react';
import ForgeReconciler from '@forge/react';
import { router } from '@forge/bridge';
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
      <FormHeader title="Create an Event">
        Required fields are marked with an asterisk <RequiredAsterisk />
      </FormHeader>
      <FormSection>
        <Label>
          Name
          <RequiredAsterisk />
        </Label>
        <Textfield/>

        <Label>
          Description
        </Label>
        <Textfield/>

        <Label>
          Timezone
        </Label>
        <Textfield/>

        <Label>
          Event Location
          <RequiredAsterisk />
        </Label>
        <Textfield/>

        <Label>
          Keywords
        </Label>
        <Textfield/>

        <Label>
          Classification
        </Label>
        <Textfield/>

        <Label>
          Start Date
          <RequiredAsterisk />
        </Label>
        <Textfield/>

        <Label>
          End Date
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
