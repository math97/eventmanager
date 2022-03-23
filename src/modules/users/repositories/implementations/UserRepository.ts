import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UsersRepository implements IUserRepository{
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({name,cpf,email,password,phoneNumber}: ICreateUserDTO):Promise<void> {
    const user =this.repository.create({name,cpf,email,password,phoneNumber})

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});

    return user!;
  }

  async findById(id:string):Promise<User> {
    const user = await this.repository.findOne(id);

    return user!;
  }

  async update({id,cpf,email,name,password,phoneNumber}:IUpdateUserDTO):Promise<User>{
    const user = await this.repository.findOne(id);

    if(cpf) user!.cpf = cpf;
    if(email) user!.email = email;
    if(name) user!.name = name;
    if(password) user!.password = password;
    if(phoneNumber) user!.phoneNumber = phoneNumber;

    await this.repository.save(user!);

    return user!;
  }
}

export {UsersRepository}