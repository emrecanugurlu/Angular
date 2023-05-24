import { Component } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';

@Component({
  selector: 'app-standalone-component1',
  templateUrl: './standalone-component1.component.html',
  styleUrls: ['./standalone-component1.component.scss'],
  standalone : true,
  imports : [Standalone2Component]
})
export class StandaloneComponent1Component {

}



