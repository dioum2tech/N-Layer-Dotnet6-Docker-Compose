import { AuthRepository } from './entity/authRepository';
import { UsersRepository } from './entity/usersRepository';

type TRepositories = {
    [key: string]: any
} 
const repositories: TRepositories = {
    'auth': AuthRepository,
    'users': UsersRepository,
}

const RepositoryFactory = {
    get: (name: string) => {
        const repos = repositories[name];
        return new repos();
    }
}
  
export default RepositoryFactory;