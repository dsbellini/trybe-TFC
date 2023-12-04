import { ServiceResponse } from '../Interfaces/ServiceResponse';
import TeamsModel from '../models/TeamsModel';
import InterfaceTeam from '../Interfaces/Teams';

export default class TeamsService {
  constructor(
    private teamsModel: TeamsModel = new TeamsModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<InterfaceTeam[]>> {
    const allTeams = await this.teamsModel.findAll();
    return { status: 'SUCCESS', data: allTeams };
  }
}
