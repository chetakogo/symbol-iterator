class Team {
  constructor() {
    this.characters = new Set();
  }

  newCharacter(...allCharacters) {
    for (const character of allCharacters) {
      this.characters.add(character);
    }
  }

  [Symbol.iterator]() {
    const heroes = Array.from(this.characters);
    let current = 0;

    return {
      next() {
        if (current < heroes.length) {
          const currentCharacter = heroes[current];
          current += 1;
          return {
            done: false,
            value: currentCharacter,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const char2 = {
  name: 'Зомби',
  type: 'Zombie',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const char3 = {
  name: 'Маг',
  type: 'Magician',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const result = new Team();
result.newCharacter(char1, char2, char3);

for (const char of result) {
  console.log(char);
}
