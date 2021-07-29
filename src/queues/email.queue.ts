import Bull from 'bull';
import emailProcess from '../processes/email.process';
import {setQueues, BullAdapter} from 'bull-board';

// https://optimalbits.github.io/bull

const emailQueue = new Bull('email', {
    redis: {
        port: Number(6379), 
        host: '13.91.245.10',  
      }
});

// const emailQueue = new Bull('email', {
//     redis: 'local:localhost:6379'
// });

setQueues([
    new BullAdapter(emailQueue)
]);

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
    emailQueue.add(data, {
        attempts: 2
    });
};

export {
    sendNewEmail
}