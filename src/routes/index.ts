import { Router } from 'express';
import SkillsController from '../controllers/SkillsController';

const routes = Router();
const skillsController = new SkillsController();

routes.get('/', skillsController.index);
routes.post('/', skillsController.create);

export default routes;