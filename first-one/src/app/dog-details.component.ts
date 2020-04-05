import { Component, Input, Output,EventEmitter } from '@angular/core';
@Component({
    selector:"dog-details",
    template:`
    <h1> {{name}} -- <span [ngStyle]="{color:color}">{{color}}</span> </h1>  
    <input (input)="handleNameChange($event)" type="text" placeholder="Name "/>
    <p></p>
    <input (input)="handleColorChange($event)" type="text" placeholder="Color " />
      `
})
export class DogDetailsComponent{
    @Input() name:string
    @Input() color:string
    @Output() bark=new EventEmitter<{}>()
    @Output() nameChange=new EventEmitter<string>()
    @Output() colorChange=new EventEmitter<string>()


    handleclick(){
        this.bark.emit({})
    }
    handleNameChange(e){
        this.nameChange.emit(e.target.value)
    }
    handleColorChange(e){
        this.colorChange.emit(e.target.value)
    }
}