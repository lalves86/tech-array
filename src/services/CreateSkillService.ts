import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

class CreateSkillService {
  public execute({ name, description, level }: Omit<Skill, 'id'>): Skill {

    const skill = skillsRepository.create({ name, description, level });

    return skill;
  }
}

export default CreateSkillService;