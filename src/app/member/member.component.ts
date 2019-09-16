import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: any;
  constructor(private memberService: MemberService) { }

  ngOnInit() {

    this.getMembers();
  }

  getMembers():void{
    this.members = this.memberService.getMembers().subscribe(data => this.members = data);
    console.log(this.members);
  }

  trackByFn(index, member) {    
    return member.mId; // unique id corresponding to the item
  }

}
