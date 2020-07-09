import skillsRepository from '../repositories/SkillsRepository';

class ListSkillByIdService {
  public execute() {

    const skill = skillsRepository.all();

    return skill;
  }
}

export default ListSkillByIdService;