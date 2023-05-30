import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movieList : {id: number,name:String}[] = [{id:1,name:"A"},{id:2,name:"B"},{id:3,name:"V"}]
  title = 'AngularListData';

  onButtonClick(event:any, movie:any){
    const trElement = event.target.closest('tr');
    const thElements = trElement.querySelectorAll('th');

    console.log(thElements[0].innerHTML)

    thElements.forEach((th: HTMLElement) => {
      console.log('Diğer <th> elemanı:', th.innerHTML);
    });

    console.log('rowData:', movie);
  }

}


