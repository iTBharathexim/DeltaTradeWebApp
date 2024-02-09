import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedHomeModule } from '../shared-home.module';
import { RBIRefComponent } from './rbiref/rbiref.component';

@NgModule({
  declarations: [
    RBIRefComponent
  ],
  imports: [
    SharedHomeModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RBIRefComponent
  ],
})
export class HomeComponentsModule { }
