import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authentication,Employees } from './user.entity';

@Injectable()
export class AppService {
  
constructor(
	@InjectRepository(Authentication)
	private AR: Repository<Authentication>,

	@InjectRepository(Employees)
	private ER: Repository<Employees>,
){}
  
async newEmployee(data: any) {
    //	const user = await this.AR.findOne({where: {companyMail:data.companyMail},});
        
       const name = await this.ER.findOne({where: {name:data.name},});
                
              if(name == null) {
		const employeeId = Math.floor(Math.random()*1000)
		const companyMail = `${data.name.toLowerCase()}@gmail.com`;
		const newEmp = {...data,employeeId,companyMail };
		 
		const postEmp =  await this.ER.save(newEmp);
		console.log(postEmp);
		return 'Employee Posted'
              }
	      else {
		      throw new Error('Error founded');
	      }
}

async getEmployee() {
	return await this.ER.find();
}

async signin(data: any) {
	console.log(data);
	const userName = data.userName;
           console.log(userName);
        
	   const passWord = data.passWord;
	   console.log(passWord);

	   const sign = {userName,passWord };
	   console.log(sign)
	   
	   const signin = await this.AR.save(sign);
          console.log(signin);
	   return signin;
}

async signal() {
   return await this.AR.find();
}

async destroy(aid:any){
	await this.AR.delete({authid:aid})
}

async auth(data:any) {
	console.log(data);

   const found = await this.AR.findOne({where:{userName:data.userName},});
     console.log(found);
    try { 
	    if(found.userName === data.userName) {
		    const pass = await this.AR.findOne({where:{passWord:data.passWord},});
		    console.log(pass);
	    
	     if(pass === null){
		    return 'Password incorrect!';
	     } 
	    else{
	    
      const authent = await this.ER.findOne({where:{name:data.userName},});
       console.log(authent);
     return authent;
	    }
    }
   
    }    
    catch {
	    throw new Error ('No data found');
    }
}
}






