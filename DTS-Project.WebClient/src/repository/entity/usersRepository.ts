import { BaseClient } from "../repository";
import { config } from "@/constants/config";
import { IUser } from "@/models";

export class UsersRepository {
  BaseClient: any;

  /**
   *
   */
  constructor() {
    this.BaseClient = new BaseClient("Users");
  }

  public async getAllUsers(): Promise<IUser[]> {
    return await this.BaseClient.Repository.get()
  }

  public async getUser(userId: string | number): Promise<IUser> {
    return await this.BaseClient.Repository.get(userId)
  }

  public async addUser(user: any): Promise<IUser> {
    console.log('UsersRepository-user: ', user)
    return await this.BaseClient.Repository.post('', user);
  }
}
