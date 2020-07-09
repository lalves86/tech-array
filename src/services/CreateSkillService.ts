import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

class CreateSkillService {
  public execute({ name, description, level }: Omit<Skill, 'id'>): Skill {

    if (!name) throw new Error('Name field is required');

    if (!description) throw new Error('Description field is required');

    if (!level) throw new Error('Level field is required');

    const checkSkillExists = skillsRepository.findByName(name);

    if (checkSkillExists) throw new Error('Skill name must be unique');

    const skill = skillsRepository.create({ name, description, level });

    return skill;
  }
}

export default CreateSkillService;