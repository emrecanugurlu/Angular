import { Component, EventEmitter, Output } from '@angular/core';
import { CustomModelComponent } from './components/custom-model/custom-model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomBootstrapModel';
  constructor(private customModelComponent : CustomModelComponent){

  }

  openCustomModel(){
    this.customModelComponent.openModel();
  }
  
}
