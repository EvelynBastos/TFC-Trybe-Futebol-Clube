import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';

export default class TeamService {
  constructor(
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async findAllTeams() {
    const allTeams = await this.teamModel.findAll();
    return { status: 200, data: allTeams };
  }
}
