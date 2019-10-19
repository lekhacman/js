'use strict';
function validate(model, obj) {
  let schema = {
    name: {
      required: true,
    },
    lang: {
      required: true,
    },
    knowledge: {
      required: true,
    },
  };

  for (let key in model) {
    if (schema[key].required && !obj[key]) {
      return false;
    }
  }

  return true;
}

function Person(name) {
  this.name = name;
}

Person.prototype.talk = function() {
  console.log('Hi, my name is ' + this.name);
};

function AwesomePerson(name, lang) {
  let awesomePerson = new Person(name);
  awesomePerson.lang = lang;

  return awesomePerson;
}

AwesomePerson.prototype = Person.prototype;

AwesomePerson.prototype.code = function() {
  console.log('I can code ' + this.lang);
};

function TA(name, lang, knowledge) {
  if (!knowledge) {
    throw new Error('Knowledge is required');
  } else if (!Array.isArray(knowledge)) {
    throw new TypeError('Knowledge must be an array.');
  }

  let ta = new AwesomePerson(name, lang);
  ta.knowledge = knowledge;

  return ta;
}

TA.prototype = AwesomePerson.prototype;
TA.prototype.design = function() {
  console.log('Let me design the software using ' + this.knowledge);
};

function taCtrl(ta) {
  if (validate(ta, ta)) {
    let person = new TA(ta.name, ta.lang, ta.knowledge);
    console.log(person);
    return person;
  }

  return undefined;
}

try {
  var man = new TA('Le Khac Man', 'JavaScript', [
    'Algorithm',
    'Data Structure',
  ]);
  man.talk();
  man.code();
  man.design();
} catch (e) {
  if (e instanceof TypeError) {
    console.log('Wrong input');
  }

  console.error(e);
}

console.log(man);

taCtrl({ name: 'man', lang: 'JS', knowledge: ['aoe'] });
