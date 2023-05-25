import { Component } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss']
})
export class CustomModelComponent {
openModel(){
  console.log("Tetiklendi");
  $("#customModal").modal('show');
}
hideModel(){
  console.log("Çalıştı");
  $("#customModal").modal('hide');
}
}
