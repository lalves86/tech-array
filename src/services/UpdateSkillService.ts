import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

interface IRequest {
  id: string;
  name: string;
  description: string;
  level: number;
}

class UpdateSkillService {
  public execute({ id, name, description, level }: IRequest): Skill {

    let skill = skillsRepository.listById(id);

    if (!skill) throw new Error('Skill id not found');

    skill = skillsRepository.update({ id, name, description, level });

    return skill;
  }
}

export default UpdateSkillService;