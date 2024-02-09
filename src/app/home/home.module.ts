import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { PageControllerComponent } from './page-controller/page-controller.component';
import { SharedHomeModule } from './shared-home.module';
import { HomeComponentsModule } from './Components/home-component.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageControllerComponent,
  ],
  imports: [
    SharedHomeModule,
    HomeComponentsModule,
    RouterModule.forChild([{
      path: "",
      component: HomeComponent,
      children: [{
          path: 'page/:id',
          component: PageControllerComponent,
          pathMatch: "full",
        }]
    }]),
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [SharedHomeModule,HomeComponentsModule],
})
export class HomeModule { }
