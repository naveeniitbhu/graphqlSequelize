import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import connection from './connection';
import user from './database/models/user';

import schema from './schema/schema';

const app = express();

const router = express.Router();
const router2 = express.Router();

const PORT = 4000;

app.use('/graphql', router);
app.use(router2);

router2.get('/', (req, resp) => {
  resp.send({ msg: 'router2 is working' });
});

router.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
