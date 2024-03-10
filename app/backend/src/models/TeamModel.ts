import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class TeamModel implements ITeamModel {
  private teams = SequelizeTeam;

  async findAll() {
    const dbTeams = await this.teams.findAll();
    return dbTeams;
  }
}
