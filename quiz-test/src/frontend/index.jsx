import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Heading, Image, Button, Text, Inline, Stack } from '@forge/react';
import { QuestionSet } from '../data/questions';
import { invoke, router } from '@forge/bridge';


const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [events, setEvents] = useState(null);


  useEffect(() => {
    invoke('getEventsHandler').then(setEvents);
  }, []);

  const onClickHandler = (isCorrect) => {
    if (isCorrect) {
      setActiveQuestion(2*activeQuestion + 1);
    } else {
      setActiveQuestion(2*activeQuestion + 2);
    }
  }

  const onClickFinish = () => {
    setShowResults(true);
  }

  const onClickEvent = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/4259853/Raspberry+Pi+Foundation+Help+Kids+to+Code+Seminar');
  }

  const onClickSignUp = async () => {
    await router.navigate('https://atl-forge-hack-team-7.atlassian.net/wiki/spaces/SD/pages/4423681/Sign+up+for+an+event')
  }

  const { question, options, image } = QuestionSet[activeQuestion];

  return (
    <>  
      { showResults ? (
        <Stack space="space.200" alignInline="center">
          <Heading as="h1">This is your perfect match!!!</Heading>
          <Image src={"https://media.giphy.com/media/XROOE9NApITmCgF6dZ/giphy.gif"} alt='High-five' size = "small"/>
          <Stack space="space.200" grow="hug">
          <Button appearance="primary" onClick={onClickSignUp}>
            Sign Up
          </Button>
          <Button appearance="primary" onClick={onClickEvent}>
            {events ? events.events.events[0].name : 'Loading'}
          </Button>
          </Stack>
        </Stack>
      ) : (
      <Stack space="space.200" alignInline="center">
        <Heading as="h1">{question}</Heading>
        <Image src={image ? image : "https://media.giphy.com/media/xUOxfjsW9fWPqEWouI/giphy.gif"} alt="Founders" size="xsmall" />
        <Inline space="space.200" alignBlock="center" alignInline="center">
          <Stack space="space.200" grow="hug">
            <Button appearance="primary" onClick={() => onClickHandler(options[0].isCorrect)} isDisabled={activeQuestion < Math.floor(QuestionSet.length / 2) ? false : true}>
              {options[0].option}
            </Button>
          </Stack>
          <Stack space="space.200" grow="hug">
            <Button appearance="primary" onClick={() => onClickHandler(options[1].isCorrect)} isDisabled={activeQuestion < Math.floor(QuestionSet.length / 2) ? false : true}>
              {options[1].option}
            </Button>
          </Stack>
        </Inline>
        <Button appearance='default' onClick={onClickFinish} isDisabled={activeQuestion >= Math.floor(QuestionSet.length / 2) ? false : true}>{ activeQuestion >= Math.floor(QuestionSet.length / 2) ? 'Finish' : null}</Button>
      </Stack> )
      }
    </>
  );
};


ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
