import express from 'express';

const app = express();

const router = express.Router();
const router2 = express.Router();

const PORT = 4000;

app.use('/graphql', router);
app.use(router2)

router2.get('/', (req, resp) => {
    resp.send({ "msg":"router2 is working"})
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));