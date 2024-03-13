import mapStatusHTTP from '../utils/mapStatusHTTP';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
  ) {}

  public async getAllMatches(query: string | undefined) {
    const allMatches = await this.matchModel.findAll(query);
    return { status: mapStatusHTTP.successful, data: allMatches };
  }

  public async getFilteredMatches(q: string | undefined) {
    const filterMatches = await this.matchModel.findAll(q);
    return { status: mapStatusHTTP.successful, data: filterMatches };
  }

  public async toogleMatchInProgress(id: number) {
    await this.matchModel.updateMatch(id);
    return { status: mapStatusHTTP.successful, data: { message: 'Finished' } };
  }
}
