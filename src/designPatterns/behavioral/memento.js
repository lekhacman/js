'use strict';
class EditorMemento {
  constructor(content) {
    this.content = content;
  }
}

class Editor {
  constructor() {
    this.content = '';
  }

  type(words) {
    this.content += words;
  }

  save() {
    return new EditorMemento(this.content);
  }

  retstore(memento) {
    if (!(memento instanceof EditorMemento)) {
      throw new TypeError();
    }

    this.content = memento.content;
  }
}

const editor = new Editor();

editor.type('This is the first setence. ');
editor.type('This is the second. ');

const saved = editor.save();

editor.type('And this is third.');

console.log(editor.content);

editor.retstore(saved);

console.log(editor.content);
