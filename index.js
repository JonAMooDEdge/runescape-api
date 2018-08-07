import express from 'express';
import morgan from 'morgan'
import { getRsPlayer } from './rs'

const app = express();

app.use(morgan('dev'));

const router = express.Router();

router.get('/:player', (req, res) =>{
    const playerName = req.params.player;

    getRsPlayer(playerName).then(p => res.json(p));
})

const hello = express.Router();

hello.get('/', (req, res)=> {
  res.json({message: "Hi"});
});

app.use('/api/player', router);

app.use('/api/hello', hello);

app.listen(3001, () => {
    console.log("Server listening on port 3001");
})

