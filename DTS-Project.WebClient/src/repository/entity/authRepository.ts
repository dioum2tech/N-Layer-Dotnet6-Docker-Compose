import { BaseClient } from "../repository";
import { config } from "@/constants/config";

export class AuthRepository {
  BaseClient: any;

  /**
   *
   */
  constructor() {
    this.BaseClient = new BaseClient("Authentication");
  }

  public async login(payload: any): Promise<any> {
    return await this.BaseClient.Repository.post(
      `${config.AUTH_RESOURCE}`,
      payload
    );
  }

  public async register(payload: any): Promise<any> {
    return await this.BaseClient.Repository.post(
      `${config.REGISTER_RESOURCE}`,
      payload
    );
  }
}
