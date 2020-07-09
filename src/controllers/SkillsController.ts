import { Response, Request } from "express";

import ListSkillsService from '../services/ListSkillsService';
import ListSkillByIdService from '../services/ListSkillsByIdService';
import CreateSkillService from "../services/CreateSkillService";
import UpdateSkillService from "../services/UpdateSkillService";
import DeleteSkillService from "../services/DeleteSkillService";

class SkillsController {
  public index(request: Request, response: Response): Response {

    const skillList = new ListSkillsService();

    const skills = skillList.execute();

    return response.json(skills);
  }

  public show(request: Request, response: Response): Response {
    try {
      const { id } = request.params;

      const listSkillByIdService = new ListSkillByIdService();

      const skill = listSkillByIdService.execute(id);

      return response.json(skill);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public create(request: Request, response: Response): Response {
    const { name, description, level } = request.body;

    const createSkill = new CreateSkillService();

    const skill = createSkill.execute({ name, description, level });

    return response.json(skill);
  }

  public update(request: Request, response: Response): Response {
    try {
      const { id } = request.params;
      const { name, description, level } = request.body;

      const updateSkill = new UpdateSkillService();

      const skill = updateSkill.execute({ id, name, description, level });

      return response.json(skill);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public delete(request: Request, response: Response): Response {
    try {
      const { id } = request.params;

      const deleteSkill = new DeleteSkillService();

      const skill = deleteSkill.execute(id);

      return response.json({ message: skill});
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default SkillsController;