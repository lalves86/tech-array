import skillsRepository from '../repositories/SkillsRepository';

class UpdateSkillService {
  public execute(id: string): string {

    const skill = skillsRepository.listById(id);

    if (!skill) throw new Error(`Skill ${id} not found`);

    skillsRepository.remove(id);

    return `Skill ${id} deleted.`;
  }
}

export default UpdateSkillService;