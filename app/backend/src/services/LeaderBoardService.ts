import LeaderBoardModel from '../models/LeaderBoardModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import InterfaceLeaderBoard from '../Interfaces/LeaderBoard';

export default class LeaderBoardService {
  constructor(
    private leaderBoardModel: LeaderBoardModel = new LeaderBoardModel(),
  ) { }

  public async getHomeTeams(home: boolean): Promise<ServiceResponse<InterfaceLeaderBoard>> {
    const teams = await this.leaderBoardModel.getHomeTeams(home);
    return { status: 'SUCCESS', data: teams };
  }
}