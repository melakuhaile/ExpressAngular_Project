import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private _http: Http) { }


	serviceRegisterUser(user){
		return this._http.post('/api/register', user)
		.map((response: Response) => response.json())
		.toPromise();
	}

	
	serviceLoginUser(credentials){
		return this._http.post('/api/login', credentials)
		.map(response => response.json())
		.toPromise();
	}
}
