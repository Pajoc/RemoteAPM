import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
    </div>
  `,
  providers: [ ProductService ]//Ao ser colocado aqui fica disponivel para todos os componentes
  
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
