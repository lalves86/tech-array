import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

class UpdateSkillService {
  public execute({ id, name, description, level }: Skill): Skill {
    if (!name) throw new Error('Name field is required');

    if (!description) throw new Error('Description field is required');

    if (!level) throw new Error('Level field is required');

    let skill = skillsRepository.listById(id);

    if (!skill) throw new Error('Skill id not found');


    skill = skillsRepository.update({ id, name, description, level });

    return skill;
  }
}

export default UpdateSkillService;