import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logout:any;
  username:string;
  constructor(private route:RouterModule) { }

  ngOnInit(): void {
    // this.logout=this.service.getvalue();
    this.username = localStorage.getItem("username");
  }

  onLogout(){
    // this.service.setvalue(true);
    this.logout=true;
    localStorage.clear();
  }

}
