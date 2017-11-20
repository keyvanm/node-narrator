// import prompt from 'prompt';
var promptSync = require('prompt-sync')();
// prompt.start();


export function dialog(character, text) {
  const message = {
    sender: {
      id: character.id
    },
    content: {
      type: 'text',
      text
    }
  };
  const logText = `> [${character.name}] ${text}`;
  console.log(logText);
  return logText;
}

export function askText(character, player, text) {
  const promptText = dialog(character, text);
  // prompt.get(promptText, (err, response) => {
  //   const message = {
  //     sender: {
  //       id: player.id
  //     },
  //     content: {
  //       type: 'text',
  //       text: response
  //     }
  //   };
  //   console.log(`\$ ${response}`);
  //   return response;
  // });
  const response = promptSync("$ ");
  const message = {
    sender: {
      id: player.id
    },
    content: {
      type: 'text',
      text: response
    }
  };
  return response;
}
