import { Body, Controller, Get, Post,Delete,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('new')
  async onboardEmployee(@Body() data: any) {

	  const user = await this.appService.newEmployee(data);
	  return {
		  message:'Employee onboarded successfully',
		  user
  };
} 

@Get('all')
async getEmployee() {
	const users = await this.appService.getEmployee();
	return {
		message:'All data returned',
		users
	};
}

@Post('sign')
async signin(@Body() data:any) {
	const auth = await this.appService.signin(data);
	return {
		message:'userName and passWord posted successfully',
		auth
             };
}

@Get('signal')
async getAll() {
	const auths = await this.appService.signal();
	return {
		message:'All auths returned',
		auths
	};
}

@Delete(':authid') 
async delete(@Param('authid')aid:any) {
        await this.appService.destroy(aid);
	return {
		message:'repeated data deleted',
	};
}
@Get('auth')
async auth(@Body() data:any) {
     const verif = await this.appService.auth(data);
    console.log(verif);
     return {
	     message:'UserName verified sucessfully',
	     verif
     };
}

}
