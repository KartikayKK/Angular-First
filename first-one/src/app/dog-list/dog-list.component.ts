import { Component } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent  {

  catgif="https://66.media.tumblr.com/9c73608a9a9f1b8f756e92897463be32/tumblr_oswq6kKFqp1ul899ho1_400.gifv";
  dog1={name: "Yeloowe", color :"Blue"};
  dog2={name: "Yoweezle", color :"Red"};
  dobark(names:string){
    console.log(`${names}has barked`);
  }
  changeDog1(name){
    this.dog1.name=name;
  }
  changeDog2(name){
    this.dog2.name=name;
  }

}
