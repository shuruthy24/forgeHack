import Resolver from '@forge/resolver';

import { fetch, webTrigger } from '@forge/api';


const resolver = new Resolver();

resolver.define('getEventsHandler', async (req) => {
    const response = await fetch('https://api.humanitix.com/v1/events?page=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'd42db2bb580fa5b6624bb88756cc394eeb351fd0af3457208d62cf2097d53b5547d02d95537c7bd784ff206e7ebed06420dcaf9229368b000ac9440fc6c697287d7eda87d7425c96297adf5a728c5cd7c2372b1c598fabfb97c151d1c3c7544c7495e96f30d6e4a4537b818dd5326f',
      }
    });

    const events = await response.json();
    if (!response.ok) {
      return response;
    }
    return {
      events
    };

})


export const handler = resolver.getDefinitions();