import { Component } from '@angular/core';
//import { NewResourceComponent } from './newResource.component';
import { Resources } from './resources';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newresource';
  model = new Resources();
  submitted = false;
  onSubmit() { this.submitted = true; }
}
