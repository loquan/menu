import { Component, OnInit } from '@angular/core';
import {  MenuObject } from '../models/menu';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

  menuList: MenuObject[]=[
    {title:'Resume',
     icon:'people',
     routePath:'resume',
     active:'active'
    },
    {title:'Videos',
     icon:'video_library',
     routePath:'video',
     active:''
    },
    {title:'Image',
     icon:'photo_library',
     routePath:'image1',
     active:''
    },
    {title:'Image2',
     icon:'photo_library',
     routePath:'image2',
     active:''
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }
  setActive(index:number){
    this.menuList.map( (object,i)=>{
        if(i==index)
          object.active='active';
        else
          object.active='';

    });

  }

}
