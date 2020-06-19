import { Response, Request } from "express";

import SkillsRepository from '../repositories/SkillsRepository';

const skillsRepository = new SkillsRepository();

class SkillsController {
  public index(request: Request, response: Response) {
    const skills = skillsRepository.index();

    return response.json(skills);
  }

  public create(request: Request, response: Response) {
    const { name, description, level } = request.body;

    const skill = skillsRepository.create({ name, description, level });

    return response.json(skill);
  }
}

export default SkillsController;