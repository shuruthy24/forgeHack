import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Heading, Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const App = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    invoke('getEventsHandler').then(setEvents);
  }, []);

  return (
    <>
      <Heading as="h1">Event Name</Heading>
      <Text>{events ? events.events.events[0].name : 'Loading'}</Text>        
      <Heading as="h1">Event Description</Heading>
      <Text>{events ? stripHtmlTags(events.events.events[0].description) : 'Loading'}</Text>
      <Heading as="h1">Start Date</Heading>
      <Text>{events ? formatDate(events.events.events[0].startDate) : 'Loading'}</Text>
      <Heading as="h1">End Date</Heading>
      <Text>{events ? formatDate(events.events.events[0].endDate) : 'Loading'}</Text>
    </>
  );
};


ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);