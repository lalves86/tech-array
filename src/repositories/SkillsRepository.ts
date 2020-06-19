import { uuid } from "uuidv4";

import ISkillDTO from '../dtos/ISkillDTO';

interface SkillDTO {
  name: String;
  description: String;
  level: Number;
}

class SkillsRepository {
  private skillsRepository: ISkillDTO[] = [];

  public index() {
    const skills = this.skillsRepository;

    return skills;
  }

  public create({ name, description, level }: SkillDTO): ISkillDTO {
    const skill = {
      id: uuid(),
      name,
      description,
      level,
    };

    this.skillsRepository = [...this.skillsRepository, skill];

    return skill;
  }
}

export default SkillsRepository;