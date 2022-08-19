import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, BaseEntity, Repository, EntityRepository } from 'typeorm';

@Entity('authentication')
export class Authentication extends BaseEntity {

@PrimaryGeneratedColumn()
authid : number;

@Column()
 userName : string;

@Column()
 passWord : string;

}

@Entity('employees')
export class Employees extends BaseEntity {
@PrimaryGeneratedColumn()
employeeId : number;

@Column()
name : string;

@Column()
companyMail: string;

@Column({nullable:true})
phoneNumber : string;

}
