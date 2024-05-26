import venom from 'venom-bot';

export const makeSockets = () => {
  const sock = venom
    .create({session: "serv1"})
    .then((client) => {
      client.onMessage((message) => {
        console.log(message);
      });
      return client;
    })
    .catch((erro) => {
      console.log(erro);
    });

  return sock;
}