import { Component, OnInit,Input, OnChanges, SimpleChanges,HostListener } from '@angular/core';
import { transition, trigger,state,style, animate } from '@angular/animations';
import { Images } from '../../models/image';

@Component({
  selector: 'app-scrolling-gallery',
  templateUrl: './scrolling-gallery.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./scrolling-gallery.component.css']
})
export class ScrollingGalleryComponent implements OnInit,OnChanges {

  count:number=0;
  current:number=0;
  imagePath:string = "https://michaelseh.com/"
  @Input() myImage:Images[]=[];

  group:number[]=[];
  groupSize:number=6;
  endIndex:number=0;
  maxLength:number=0;
  isOpen:boolean=true;
  xSpacing:number=189;
  leftButtonVisible="visible";
  rightButtonVisible="hidden";
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;


  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    //this.groupSize=Math.round(this.screenWidth/300);
    this.group=[];
    for(let x=0;x<this.groupSize;x++)
    {
       this.group[x]=x;
    }
    this.endIndex=this.groupSize;
    this.maxLength=this.myImage.length;

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

    this.onResize();



    setTimeout(()=>{
      this.updateSize();


    },100);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("change");

  }
  left(){
    this.isOpen=false;
    let xPos:number=0;
    console.log('xPos:'+xPos);


    var timeAnimation=setInterval(() =>{

      //
      let  app = document.getElementsByClassName('card');
      xPos-=4;
      let xLast=0;
      let heightLast=0;
      let widthLast=0;
      //let position = app as HTMLElement;
      this.endIndex=this.group[this.group.length-1]+1;

      for(let i=0;i<app.length;i++)
      {
        let position = app[i] as HTMLElement;
        position.style.position='relative';
        position.style.left=xPos+'px';
        xLast=position.offsetLeft;

        heightLast=position.getBoundingClientRect().height;
        widthLast=parseInt(position.getBoundingClientRect().width.toString())+2;


      }


      let  temp = document.getElementById('cardTemp') as HTMLElement;
      temp.style.visibility="visible";
      temp.style.position='absolute';
      temp.style.display='block';

      temp.style.left=(xLast+this.xSpacing)+'px';
      temp.style.height=heightLast+"px";
      temp.style.width=widthLast+"px";
      //temp.style.top=(xLast)+'px';

    }, 10)

    setTimeout(() =>{

      this.count++;
      let  app = document.getElementsByClassName('card');
      let  temp = document.getElementById('cardTemp') as HTMLElement;
      temp.style.visibility="hidden";
      let firstIndex:number=0;
      //this.group=[1,2,3,4,5];
      for(let q=0;q<app.length;q++)
      {
        let position = app[q] as HTMLElement;
        this.group[q]=this.count+q;
        position.style.position='relative';
        position.style.left='0px';
        console.log("${q}:",position.style.left);
      }
      firstIndex=this.group[0];
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
         this.focusImage(firstIndex+1);

      }
      clearTimeout(timeAnimation);
    }, 500);



  //   setTimeout(() =>{

  //     this.count++;
  //     let  app = document.getElementsByClassName('card');
  //     for(let q=0;q<app.length;q++)
  //     {
  //       this.group[q]=this.count+q;

  //     }

  //   }, 500);

  //   let  app = document.getElementsByClassName('card');
  //   for(let q=0;q<app.length;q++)
  //     {
  //       let position = app[q] as HTMLElement;
  //        position.style.animationFillMode='forwards';

  //   position.animate([
  //     // keyframes

  //     { transform: 'translateX(0px)' },
  //     { transform: 'translateX(-200px)' }

  //   ], {
  //     // timing options

  //     duration: 500
  //   });
  // }





  }
  right(){
    this.isOpen=false;
    let xPos:number=0;
    let xLast=0;
    let heightLast=0;
    let widthLast=0;
    this.endIndex=this.group[0]-1;
    console.log('xPos:'+xPos);
    let  app = document.getElementsByClassName('card');
    var timeAnimation=setInterval(() =>{

      //let  app = document.getElementById('card');

      xPos+=4;
      //let position = app as HTMLElement;
      for(let i=0;i<app.length;i++)
      {
        let position = app[i] as HTMLElement;
        let first = app[0] as HTMLElement;

        position.style.position='relative';
        position.style.left=xPos+'px';

        xLast=first.offsetLeft;

        heightLast=first.getBoundingClientRect().height;
        widthLast=parseInt(first.getBoundingClientRect().width.toString())+2;

      }
      let  temp = document.getElementById('cardTemp') as HTMLElement;
      temp.style.display='block';
      temp.style.visibility="visible";
      temp.style.position='absolute';
      temp.style.left=(xLast-(this.xSpacing+21))+'px';
      temp.style.height=heightLast+"px";
      temp.style.width=widthLast+"px";

    }, 10)

    setTimeout(() =>{
      console.log("done");
      this.count--;
      //this.group=[1,2,3,4,5];
      let  temp = document.getElementById('cardTemp') as HTMLElement;
      temp.style.visibility="hidden";
      let lastIndex:number=0;
      for(let q=0;q<app.length;q++)
      {
        let position = app[q] as HTMLElement;
        this.group[q]=this.group[q]-1;
        lastIndex=this.group[app.length-1];
        position.style.position='relative';
        position.style.left='0px';

      }

      if(this.count<=0)
        this.rightButtonVisible="hidden";
      else
        this.rightButtonVisible="visible";

      if(this.count<(this.maxLength-this.group.length))
        this.leftButtonVisible="visible";
      else
        this.leftButtonVisible="hidden";

      if(this.current>lastIndex)
      {
        this.current=lastIndex;
         this.selectImage(lastIndex) ;
         this.focusImage(lastIndex-1);

      }
      clearTimeout(timeAnimation);
    }, 500);





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
