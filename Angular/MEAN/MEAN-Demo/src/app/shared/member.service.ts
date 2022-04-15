import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import{Member} from './member.model'


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  selectedMember:Member;
  Members:Member[];

  baseURL="http://localhost:3000/Members";

  constructor(private http:HttpClient) {  }

  postMember(M:Member){
    return this.http.post(this.baseURL,M);
  }

  getMemberList(){
    return this.http.get(this.baseURL)
  }

  putMember(M: Member) {
    return this.http.put(this.baseURL + `/${M._id}`, M);
  }

  deleteMember(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
