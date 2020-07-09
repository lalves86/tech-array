// import { skillsRepository } from '../dtos/ISkillsRepository';
import skillsRepository from '../repositories/SkillsRepository';

class ListSkillByIdService {
  public execute() {

    const skill = skillsRepository.index();

    return skill;
  }
}

export default ListSkillByIdService;