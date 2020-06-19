import { uuid } from 'uuidv4';

class Skill {
  id: string;

  name: string;

  description: string;

  level: number;

  constructor(name: string, description: string, level: number) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.level = level;
  }
}

export default Skill;