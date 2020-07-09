import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

class UpdateSkillService {
  public execute(id: string): string {

    const skill = skillsRepository.show(id);

    if (!skill) throw new Error(`Skill ${id} not found`);

    skillsRepository.delete(id);

    return `Skill ${id} deleted.`;
  }
}

export default UpdateSkillService;