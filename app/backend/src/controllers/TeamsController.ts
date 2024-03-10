import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) {}

  public async getAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this.teamService.findAllTeams();

    res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async getTeamById(_req: Request, res: Response) {
    const { id } = _req.params;
    const serviceResponse = await this.teamService.findTeamById(Number(id));
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }
}
