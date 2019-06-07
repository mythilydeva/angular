import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Tree, TreeNode } from 'primeng/primeng';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list_array: any;
  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.ProjectList()
  }

  ProjectList(){
    this.service.getProjectList()
    .then(res => {
      this.list_array = res;
      console.log(this.list_array)
    })
    .catch(err => err)

  }

}
