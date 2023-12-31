import { InterfaceUserLogin } from '../Interfaces/Users';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel {
  private model = SequelizeUser;

  public async findUser(user: InterfaceUserLogin): Promise<InterfaceUserLogin | null> {
    const userData = await this.model.findOne({ where: { email: user.email } });
    if (!userData) {
      return null;
    }
    return userData.dataValues;
  }

  public async isValidEmail(email: string): Promise<boolean> {
    const userData = await this.model.findOne({ where: { email } });
    if (!userData) {
      return false;
    }
    return true;
  }

  public async getRole(email: string): Promise<string> {
    const userData = await this.model.findOne({ where: { email } });
    if (!userData) {
      return 'Role not found';
    }
    return userData.dataValues.role;
  }
}
