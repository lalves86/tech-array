import { uuid } from "uuidv4";
import Skill from "../models/Skill";

interface IRequest {
  id: string;
  name: string;
  description: string;
  level: number;
}

class SkillsRepository {
  private skillsRepository: Skill[] = [];

  public index() {
    const skills = this.skillsRepository;

    return skills;
  }

  public show(id: string): Skill | undefined {
    const skill = this.skillsRepository.find(skill => skill.id === id);

    return skill;
  }

  public create({ name, description, level }: IRequest): Skill {
    const skill = {
      id: uuid(),
      name,
      description,
      level,
    };

    this.skillsRepository = [...this.skillsRepository, skill];

    return skill;
  }

  public update({ id, name, description, level }: IRequest): Skill {
    const skill = {
      id,
      name,
      description,
      level,
    }

    const skillIndex = this.skillsRepository.findIndex(skill => skill.id === id);

    this.skillsRepository[skillIndex] = skill;

    return skill;
  }

  public delete(id: string): void {
    const skills = this.skillsRepository.filter(skill => skill.id !== id);

    this.skillsRepository = [...skills];
  }
}

export default new SkillsRepository();