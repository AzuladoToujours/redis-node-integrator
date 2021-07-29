import express from 'express';
import bodyParser from 'body-parser';
import { sendNewEmail } from './queues/email.queue';
import { router } from 'bull-board';
const app = express();

app.use(bodyParser.json());

app.use('/admin/queues', router);

app.post('/api/io/_v/pricesQuick', async (req, res) => {

    await sendNewEmail(req.body);
    res.send({ status: 'ok' });
});

app.listen(5000, () => console.log('App running on port 5000'));