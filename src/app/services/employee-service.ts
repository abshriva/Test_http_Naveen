import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../app-error/App-error';
import 'rxjs/add/operator/map'; // map called on instance
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';// throw is static method

/**
 * 
 * 
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService{
 
      
      private empList:Employee[] =[];
      private apiUrl='https://my-json-server.typicode.com/abshriva/Abhishek-RepoJson/employees';
    
      constructor(private http: Http){}

      getEmployees(): Employee[]
      { 
      return this.empList;
      }
        
      createEmployee(employee: Employee): Observable<Employee>
      {
            //this.empList.unshift(employee);
            return this.http
            .post(this.apiUrl,employee)
            .map((response:Response)=>{return response.json()})
            .catch((error:Response)=>{
              const appError = new AppError(error);
              return Observable.throw(appError);
            });
      }
        
}