import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
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
  group:number[]=[0,1,2,3,4,5];
  endIndex:number=6;

  isOpen:boolean=true;
  xSpacing:number=189;
  constructor() { }

  ngOnInit(): void {
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
      //this.group=[1,2,3,4,5];
      for(let q=0;q<app.length;q++)
      {
        let position = app[q] as HTMLElement;
        this.group[q]=this.count+q;
        position.style.position='relative';
        position.style.left='0px';
        console.log("${q}:",position.style.left);
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
      for(let q=0;q<app.length;q++)
      {
        let position = app[q] as HTMLElement;
        this.group[q]=this.count+q;
        position.style.position='relative';
        position.style.left='0px';

      }
      clearTimeout(timeAnimation);
    }, 500);






  }
  selectImage(index:number){
    this.current=index;

  }
  currentSlide(index:number){


  }
}
