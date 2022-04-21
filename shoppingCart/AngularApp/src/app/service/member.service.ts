import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../shared/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  selectedMember: Member;
  Members: Member[];

  baseURL = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) {}

  postMember(M: Member) {
    return this.http.post(this.baseURL, M);
  }

  getMemberList(Email: string, password: string) {
    return this.http.post(this.baseURL + '/signin', { Email, password });
  }

  // putMember(M: Member) {
  //   return this.http.put(this.baseURL + `/${M._id}`, M);
  // }

  // deleteMember(_id: string) {
  //   return this.http.delete(this.baseURL + `/${_id}`);
  // }
}
