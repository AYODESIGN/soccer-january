import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  articles: any = [{date: "07-05-2023", description:"Big win today",title: 'Napoly is back', img:'assets/images/img_2.jpg' },{date: "07-05-2023", description:"Big win today",title: 'Napoly is back', img:'assets/images/img_1.jpg'}]
 

  constructor() { }

  ngOnInit() {
  }

}
