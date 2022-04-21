import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { MemberService } from '../../service/member.service';
import { Member } from '../../shared/member.model';
import { TokenStorageService } from 'src/app/service/tokenStorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MemberService],
})
export class LoginComponent implements OnInit {
  constructor(
    readonly memberService: MemberService,
    public tokenStorage: TokenStorageService
  ) {}

  ngOnInit() {
    this.resetForm();
    // this.getMembersListData(form);
  }

  resetForm(form?: NgForm) {
    this.memberService.selectedMember = {
      _id: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
    };

    if (form) {
      form.reset();
    }
  }

  getMembersListData(form: NgForm) {
    this.memberService
      .getMemberList(form.value.Email, form.value.Password)
      .subscribe((res) => {
        this.memberService.Members = res as Member[];
        console.log(this.memberService.Members);
      });
  }

  onSubmitOld(form: NgForm) {
    if (
      (form.value.Email !== '' || form.value.Email !== null) &&
      (form.value.Password !== '' || form.value.Password !== null)
    ) {
      this.memberService
        .getMemberList(form.value.Email, form.value.Password)
        .subscribe((res) => {
          if (form.value.Email == res) this.resetForm(form);
        });
    }
  }

  onSubmit(form: NgForm) {
    const { Email, Password } = form.value;
    this.memberService.getMemberList(Email, Password).subscribe({
      next: (data: any) => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);

        this.tokenStorage.saveUser(data);

        setTimeout(() => {
          this.reloadPage();
        }, 1500);
        Swal.fire('Success', 'Go ahead and shop you like..', 'success');
      },

      error: (err) => {
        console.log(err);

        Swal.fire('OPPS!!', 'Something went wrong', 'error');
      },
    });
  }

  reloadPage(): void {
    window.location.href = '/products';
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
