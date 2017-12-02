import { Component } from '@angular/core';
import { Resources } from './resources';

@Component({
  selector: 'newresource',
  templateUrl: './newresource.component.html'
})
export class NewResourceComponent {
  title = 'newresource';
  model = new Resources();
  submitted = false;
  onSubmit() { this.submitted = true; }
    
}
