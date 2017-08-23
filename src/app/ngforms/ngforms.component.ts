import { Component, OnInit } from '@angular/core';
import { connectService} from '../connect.service';

@Component({
  selector: 'app-ngforms',
  templateUrl: './ngforms.component.html',
  styleUrls: ['./ngforms.component.css'],
  providers: [connectService]
})
export class NgformsComponent  {
  constructor(private service:connectService){


  }
  
//   contact=[{
//     id:"1",
//     name:"email"
//   },
// {
//   id:"2",
//   name:"mobile"

// },{
//   id:"3",
//   name:"iphone"
// }]
submit(f){
  // console.log(f.value.userName);

  console.log(f);
  let data=f.value
  this.service.postdata(f.value);
}

 

}
