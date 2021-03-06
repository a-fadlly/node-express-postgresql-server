import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import { sequelize } from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

app.use('/priorities', routes.priority);
app.use('/statuses', routes.status);
app.use('/types', routes.type);
app.use('/users', routes.user);
//test
app.use('/tickets', routes.ticket);

// Start

sequelize.sync({ force: false }).then(async () => {

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});
