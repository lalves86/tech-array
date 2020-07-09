import { Router } from 'express';
import SkillsController from '../controllers/SkillsController';

const routes = Router();
const skillsController = new SkillsController();

routes.get('/', skillsController.index);

routes.get('/:id', skillsController.show);

routes.post('/', skillsController.create);

routes.put('/:id', skillsController.update);

routes.delete('/:id', skillsController.delete);

export default routes;