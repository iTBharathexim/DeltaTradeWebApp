import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedHomeModule } from '../shared-home.module';
import { RBIRefComponent } from './rbiref/rbiref.component';
import { BenchMarksComponent } from './BenchMarks/BenchMarks.component';

@NgModule({
  declarations: [
    RBIRefComponent,
    BenchMarksComponent
  ],
  imports: [
    SharedHomeModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    RBIRefComponent,
    BenchMarksComponent
  ],
})
export class HomeComponentsModule { }
