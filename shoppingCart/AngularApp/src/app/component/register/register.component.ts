import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MemberService} from '../../service/member.service';
import{Member} from '../../shared/member.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[MemberService]
})
export class RegisterComponent implements OnInit {
  constructor(readonly memberService:MemberService) { }

  ngOnInit() {
      this.resetForm();
      // this.getMembersListData();
  }

  resetForm(form?:NgForm){
  
    this.memberService.selectedMember={
      _id:"",
      FirstName:"", 
      LastName:"", 
      Email:"", 
      Password:"",
    }

    if(form)
    {
      form.reset();
    }
  }

  // getMembersListData(){
  //   this.memberService.getMemberList().subscribe((res)=>{
  //     this.memberService.Members=res as Member[];
  //   });
  // }

  onSubmit(form: NgForm)
  {
    if (form.value._id == "" || form.value._id == null) {
      this.memberService.postMember(form.value).subscribe((res) => {
        this.resetForm(form);
        window.location.href= "/login"
        // this.getMembersListData();
      });
    }
    // else {
    //   this.memberService.putMember(form.value).subscribe((res) => {
    //     this.resetForm(form);
    //     this.getMembersListData();
    //   });
    // }
  }  

  // onEdit(M: Member) {
  //   this.memberService.selectedMember = M;
  //   this.getMembersListData();
  // }

  // onDelete(_id: string, form: NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     this.memberService.deleteMember(_id).subscribe((res) => {
  //       this.resetForm(form);
  //       this.getMembersListData();
  //     });
  //   }
  // }

}
