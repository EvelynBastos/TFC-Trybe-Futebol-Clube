import SequelizeTeam from '../database/models/SequelizeTeam';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private matches = SequelizeMatch;

  async findAll(q: string | undefined) {
    const condition = q !== undefined ? { inProgress: q === 'true' } : {};
    const dbMatchesInProgress = await this.matches.findAll({

      where: condition,
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return dbMatchesInProgress;
  }

  async updateMatch(id: number) {
    const [match] = await this.matches.update({ inProgress: false }, {
      where: { id } });
    return match;
  }

  async updateScore(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const [match] = await this.matches
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return match;
  }
}
