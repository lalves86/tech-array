import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

class UpdateSkillService {
  public execute({ id, name, description, level }: Skill): Skill {

    let skill = skillsRepository.listById(id);

    if (!skill) throw new Error('Skill id not found');

    skill = skillsRepository.update({ id, name, description, level });

    return skill;
  }
}

export default UpdateSkillService;