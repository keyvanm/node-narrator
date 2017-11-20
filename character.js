import { dialog, askText } from './interface';

class Character {
  constructor ({id, name}) {
    this.id = id;
    this.name = name;
  };

  says (text) {
    dialog(this, text);
  }

  asks (player, question) {
    return askText(this, player, question);
  }
};


// Character.prototype.ask = function (question) {
//   if (typeof question === "string")
//     return dialogPrompt(this, question);
//   else if (question.options)
//     return promptMultipleChoice(this, question);
// };

export default Character;
