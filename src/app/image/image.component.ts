import { transition, trigger,state,style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Images } from '../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./image.component.css'],
  animations:[
    trigger('move',[
      state('start',style({backgroundColor:'red',opacity:1,position:'relative',left:'0px'})),
      state('left',style({backgroundColor:'green',opacity:.5,position:'relative',left:'-200px'})),
      transition('start => left',[animate(3000)]),

    ])
  ]
})
export class ImageComponent implements OnInit {
  count:number=0;
  current:number=0;
  imagePath:string = "https://michaelseh.com/"
  ImageSet1:Images[]=[{
    title:"test 1",
    image:'Michael_Seh_01.jpg'

  },
  {
    title:"test 2",
    image:'Michael_Seh_02.gif'

  },
  {
    title:"test 3",
    image:'Michael_Seh_03.jpg'

  },
  {
    title:"test 4",
    image:'Michael_Seh_04.jpg'

  }
  ,{
    title:"test 5",
    image:'Michael_Seh_05.jpg'

  },{
    title:"test 6",
    image:'Michael_Seh_06.jpg'

  },{
    title:"test 7",
    image:'Michael_Seh_06.jpg'

  },{
    title:"test 8",
    image:'Michael_Seh_08.jpg'

  },{
    title:"test 8",
    image:'Michael_Seh_08.jpg'

  }
  ,{
    title:"test 9",
    image:'Michael_Seh_09.jpg'

  },
  {
    title:"test10",
    image:'Michael_Seh_10.jpg'

  },
  {
    title:"test 11",
    image:'Michael_Seh_11.jpg'

  },
  {
    title:"test 12",
    image:'Michael_Seh_12.jpg'

  },
  {
    title:"test 13",
    image:'Michael_Seh_13.jpg'

  },
  {
    title:"test 14",
    image:'Michael_Seh_14.jpg'

  },
  {
    title:"test 15",
    image:'Michael_Seh_15.jpg'

  },
  {
    title:"test 16",
    image:'Michael_Seh_16.jpg'

  },
  {
    title:"test 17",
    image:'Michael_Seh_17.jpg'

  },
  {
    title:"test 18",
    image:'Michael_Seh_18.jpg'

  },
  {
    title:"test 19",
    image:'Michael_Seh_19.jpg'

  },{
    title:"test20",
    image:'Michael_Seh_20.jpg'

  },
  {
    title:"test 21",
    image:'Michael_Seh_21.jpg'

  },
  {
    title:"test 22",
    image:'Michael_Seh_22.jpg'

  },
  {
    title:"test 23",
    image:'Michael_Seh_23.jpg'

  },
  {
    title:"test 24",
    image:'Michael_Seh_24.jpg'

  },
  {
    title:"test 25",
    image:'Michael_Seh_25.jpg'

  },
  {
    title:"test 26",
    image:'Michael_Seh_26.jpg'

  },
  {
    title:"test 27",
    image:'Michael_Seh_27.jpg'

  },
  {
    title:"test 28",
    image:'Michael_Seh_28.jpg'

  },
  {
    title:"test 29",
    image:'Michael_Seh_29.jpg'

  },
  {
    title:"test 30",
    image:'Michael_Seh_30.jpg'

  }


  ];

  constructor() { }

  ngOnInit(): void {
  }


}
