import { Component, OnInit,Input, OnChanges, SimpleChanges,HostListener } from '@angular/core';
import { transition, trigger,state,style, animate } from '@angular/animations';
import { Images } from '../../models/image';

@Component({
  selector: 'app-scrolling-angular',
  templateUrl: './scrolling-angular.component.html',
  styleUrls: ['./scrolling-angular.component.css'],
   animations:[
    trigger('move',[
      state('start',style({position:'relative',left:'0px'})),
      state('left',style({position:'relative',left:'-200px'})),
      state('right',style({position:'relative',left:'200px'})),
      transition('start => left',[animate(500)]),
      transition('start => right',[animate(500)]),
      transition('left => start',[animate(0)]),
      transition('right => start',[animate(0)]),


    ])
  ]
})
export class ScrollingAngularComponent implements OnInit {

  count:number=0;
  current:number=0;
  @Input() imagePath:string = "https://michaelseh.com/"
  @Input() myImage:Images[]=[];

  group:number[]=[];
  groupSize:number=6;
  endIndex:number=0;
  maxLength:number=0;
  isOpen:boolean=true;
  animateLeft:boolean=true;
  xSpacing:number=189;
  leftButtonVisible="visible";
  rightButtonVisible="hidden";
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  animateState:number=0;
  startAnimation:boolean=false;
  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.groupSize=Math.round(this.screenWidth/300);
    this.group=[];
    for(let x=0;x<this.groupSize;x++)
    {
       this.group[x]=x;
    }
    this.endIndex=this.groupSize;


  }

  constructor() { }


  updateSize(){


      let  first = document.getElementsByClassName('card')[0] as HTMLElement;
      let  clipping = document.getElementsByClassName('flex-container')[0] as HTMLElement;
      let clippingWidth=clipping.getBoundingClientRect().width;
      first.style.opacity="1";

      if(clippingWidth>0)
      clipping.style.clip= 'rect(0px,'+clippingWidth+'px,400px,0px)';

  }
  ngOnInit(): void {
    this.maxLength=this.myImage.length;
    this.onResize();



    setTimeout(()=>{
      this.updateSize();


    },100);
  }


  startAnimationEvent(event:any){





    this.startAnimation=true;


  }
  endAnimationEvent(event:any){


    // let  temp = document.getElementById('cardTemp') as HTMLElement;
    // temp.style.visibility="hidden";
    // temp.style.display="none";
    // temp.style.left='500px';
    if(this.animateState==1)//left called multiple times
    {
      let  app = document.getElementsByClassName('card');
      this.animateState=0;
      //this.group.pop();
      for(let q=0;q<this.group.length;q++)
      {
        this.group[q]=this.group[q]+1;
      }
      // let  temp = document.getElementById('cardTempEnd') as HTMLElement;
      // temp.style.visibility="hidden";
      // temp.style.display="none";
    }else if( this.animateState==2 ){//right left called multiple times

      let  app = document.getElementsByClassName('card');
        this.animateState=0;
        for(let q=0;q<app.length;q++)
        {
          this.group[q]=this.group[q]-1;
        }
        // let  temp = document.getElementById('cardTempStart') as HTMLElement;
        // temp.style.visibility="hidden";
        // temp.style.display="none";



    }
    this.animateState=0;

    //hidde at the end
    // let  temp = document.getElementById('cardTemp') as HTMLElement;
    // temp.style.visibility="hidden";
    // temp.style.display="none";

    this.startAnimation=false;
  }
  leftAnimation(){

    let firstIndex=this.group[1];

    this.count++;

    this.endIndex=5;


    if(this.count>=0)
      this.rightButtonVisible="visible";
    else
     this.rightButtonVisible="hidden";

    if(this.count<(this.maxLength-this.group.length))
     this.leftButtonVisible="visible";
    else
      this.leftButtonVisible="hidden";


    if(this.current<firstIndex)
    {
         this.current=firstIndex;
         this.selectImage(firstIndex) ;
         //this.focusImage(firstIndex);

      }

      let  app = document.getElementsByClassName('card');
      let  position = app[app.length-1] as HTMLElement;
      let xLast=position.offsetLeft;


      // let heightLast=position.getBoundingClientRect().height;
      // let widthLast=parseInt(position.getBoundingClientRect().width.toString())+2;
      // this.endIndex=this.group[this.group.length-1]+1;
      // let  temp = document.getElementById('cardTempEnd') as HTMLElement;
      // temp.style.visibility="visible";
      // temp.style.display="block";
      // temp.style.position='absolute';
      // temp.style.backgroundColor='yellow';

      //temp.style.left=(xLast+this.xSpacing)+'px';



        // let maxValue=this.group[this.group.length-1];
        // this.group.push(++maxValue);
        // setTimeout( () =>{this.animateState=1;},1
        // )
        this.animateState=1;

  }

  rightAnimation(){
    this.count--;

    let lastIndex:number=0;
    if(this.count<=0)
      this.rightButtonVisible="hidden";
    else
      this.rightButtonVisible="visible";

    if(this.count<(this.maxLength-this.group.length))
      this.leftButtonVisible="visible";
    else
      this.leftButtonVisible="hidden";

      lastIndex=this.group[this.group.length-1];
      if(this.current>=lastIndex)
      {
        this.current=lastIndex;
         this.selectImage(lastIndex-1) ;
         this.focusImage(lastIndex-1);

      }


      // this.endIndex=this.group[0]-1;
      // let  temp = document.getElementById('cardTempStart') as HTMLElement;
      // temp.style.visibility="visible";
      // temp.style.display="block";
      // temp.style.position='absolute';
      // temp.style.backgroundColor='orange';
      // temp.style.left='100px';
      // let firstValue=this.group[0]-1;
      // if(firstValue>=0)
      // {
      //   this.group.unshift(firstValue);
      // }


      setTimeout(()=>{
        this.animateState=2
      },122);
      //this.animateState=2;


  }




  focusImage(index:number){

    let  app = document.getElementsByClassName('card');
    for(let i=0;i<app.length;i++)
    {
      let position = app[i] as HTMLElement;

      if(this.group[i]==index)
      {
        position.style.opacity="1";
        position.style.backgroundColor="green";
      }
      else
      {
        position.style.opacity="0.7";
        position.style.backgroundColor="white";
      }
    }




  }

  selectImage(index:number){
    this.current=index;
    let  app = document.getElementsByClassName('card');
    for(let i=0;i<app.length;i++)
    {
      let position = app[i] as HTMLElement;

      if(this.group[i]==index)
      {
        position.style.opacity="1";
        position.style.backgroundColor="green";
      }
      else
      {
        position.style.opacity="0.7";
        position.style.backgroundColor="white";
      }
    }


  }
  currentSlide(index:number){


  }
}
