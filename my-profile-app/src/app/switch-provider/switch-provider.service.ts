import {Injectable}  from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RaDetails } from './switch-provider.model';

@Injectable()
export class ProviderService{

    constructor(private http: HttpClient){}
    getAllProvider(){
        return this.http.get<RaDetails[]>('http://localhost:8080/api/customers');
    }
}