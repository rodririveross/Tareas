import { Component } from '@angular/core';
import { IonItem, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
    todoList= []     
    buscado = [];
    completo=false
    textoBuscar='';
   today: number = Date.now();

  constructor(public modalCtrl: ModalController) {
    
  }
  async AddTask(){                                 
     const modal=await this.modalCtrl.create({    
       component: AddNewTaskPage              //llama al componente de la nueva tarea para cearla
     })
    //  this.inicializar();

     modal.onDidDismiss().then(newtaskObj=>{
      // console.log(newtaskObj.data); 
      this.todoList.push(newtaskObj.data)
     })

     return await modal.present()

  }
  delete(index){
    this.todoList.splice(index, 1)
    
  }
  completado(){
    if (this.completo == false)
       { this.completo = true}
      console.log(this.completo);
    return this.completo

 }
// inicializar(){
  //this.buscado= this.todoList;
  
  buscar(event){
   // this.inicializar();
   const val  =event.target.value;
    if(val && val.trim()!='')
    {
      this.buscado= this.todoList.filter((item) =>{
        console.log(item);
        return (item.nombreItem.toLowerCase().indexOf(val.toLowerCase()) >-1 );
      });
    }else{
      return this.todoList;
    }
    console.log(this.buscado);
  }
 
}