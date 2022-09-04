import { config } from "@/constants/config";
import { IUser } from "@/models";
import RepositoryFactory from "@/repository/factory";

const usersRepository = RepositoryFactory.get("users");

export class UsersService {
    authRepository: any;

    /**
     *
     */
    constructor() {
        this.authRepository = RepositoryFactory.get("auth")
    }

    public async addUser(user: IUser): Promise<any> {
        const result = await this.authRepository.register(user);
        console.log('UsersService: ', result)
        // result.then(async (response: any) => {
        //     console.log('UsersService: ', response)
        //     if(response.success) {
        //         return response.data;
        //     }
        //     return {};
        // });
    }
}