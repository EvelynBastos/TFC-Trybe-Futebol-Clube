import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(private matchService: MatchService = new MatchService()) {}

  public async getAllMatches(_req: Request, res: Response) {
    const respMatch = await this.matchService.getAllMatches();
    res.status(respMatch.status).json(respMatch.data);
  }
}
