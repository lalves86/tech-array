// import { skillsRepository } from '../dtos/ISkillsRepository';
import skillsRepository from '../repositories/SkillsRepository';
import Skill from "../models/Skill";

interface IRequest {
  name: string;
  description: string;
  level: number;
}

class CreateSkillService {
  public execute({ name, description, level }: IRequest): Skill {

    const skill = skillsRepository.create({ name, description, level });

    return skill;
  }
}

export default CreateSkillService;