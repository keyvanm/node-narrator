import Character from './character';


const player = new Character({ id: "self", name: "Anonymous" });
const ai = new Character({ id: "ai", name: "RE_" });

const play = () => {
  ai.says("Greetings!");
  player.name = ai.asks(player, "Whats your name?");
  ai.says(`Good to meet you ${player.name}`);
  player.age = ai.asks(player, "How old are you?");
  ai.says(`${player.age} is a good age`);
}

export default play;
