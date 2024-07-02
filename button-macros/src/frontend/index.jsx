import React from 'react';
import ForgeReconciler, { Button, Stack } from '@forge/react';
import { router } from '@forge/bridge';

const App = () => {

  const onClickButton = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/apps/73b7af54-9295-47e6-94d4-eddeba4612cd/1eb9316e-8a34-4aa6-9dd9-ca5f18021489/global-page');
  }

  const onClickEvent = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/3571742/Create+an+Event');
  }

  const onClickSignUp = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/4423681/Sign+up+for+an+event')
  }

  const onClickAllEvents = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/4259887/All+Events')
  }

  return (
    <>
     <Stack space="space.200" alignInline="center">
     <Stack space="space.200" grow="hug">
        <Button appearance="primary" onClick={onClickButton} isDisabled={false}>
          Forge Your Own Adventure!
        </Button>
      </Stack>

      <Stack space="space.200" grow="hug">
        <Button appearance="primary" onClick={onClickEvent} isDisabled={false}>
          Create an Event!
        </Button>
      </Stack>

      <Stack space="space.200" grow="hug">
        <Button appearance="primary" onClick={onClickSignUp} isDisabled={false}>
          Sign Up!
        </Button>
      </Stack>

      <Stack space="space.200" grow="hug">
        <Button appearance="primary" onClick={onClickAllEvents} isDisabled={false}>
          All Events
        </Button>
      </Stack>

     </Stack>
      
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
