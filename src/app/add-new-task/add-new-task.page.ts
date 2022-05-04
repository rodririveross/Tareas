import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  newtaskObj={}
  categorias =['Trabajo','Personal','Hogar']
  nombreTarea
  fechaTarea
  PrioridadTarea
  CategoriaTarea
  taskObject
 
  constructor(public modalCrtl: ModalController) { }

  ngOnInit() {
  }
 async dismis(){
   await this.modalCrtl.dismiss(this.taskObject)
 }
 categoriaSeleccionada(index){
  this.CategoriaTarea = this.categorias [index]
 }
 adicionartarea(){
 this.taskObject = ({nombreItem:this.nombreTarea,
                      prioridadItem:this.PrioridadTarea, 
                      fechaItem:this.fechaTarea, 
                      categoriaItem:this.CategoriaTarea })
    this.dismis()                  
 }
 
 
} 
