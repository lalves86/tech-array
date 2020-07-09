import skillsRepository from '../repositories/SkillsRepository';

class ListSkillByIdService {
  public execute(id: string) {
    const skill = skillsRepository.show(id);

    if (!skill) throw new Error('Skill id not found');

    return skill;
  }
}

export default ListSkillByIdService;