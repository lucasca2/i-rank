import express from 'express';
import fs from 'fs';



const server = express();

async function getRank() {
  return JSON.parse(await fs.readFileSync('./rank.json').toString());
}

async function setRank(rank) {
  try {
    await fs.writeFileSync('./rank.json', JSON.stringify(rank), 'utf8');

    return await getRank();
  } catch (err) {
    console.log('Erro ao atualizar o rank', err);
  }
}

server.get('/rank', async (req, res) => {
  let currentRank = await getRank();

  return res.json(currentRank);
});

server.put('/rank/:id', async (req, res) => {
  const { user } = req.body;
  const user_id = req.params.id;

  if(!user || !user_id) return res.json({ error: 'Você precisa informar um usuário' });

  let newRank = await getRank();

  newRank.forEach(u => {
    if(u.id === user_id) {
      u.wins = user.wins;
    }
  });

  newRank = await setRank(newRank);

  return res.json(newRank);
});

server.listen(3333, () => {
  console.log('Conectado na porta 3333');
});
