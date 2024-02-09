import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CustomModelComponent } from './custom-model/custom-model.component';
import { CustomModelHeaderComponent } from './custom-model/custom-model-header/custom-model-header.component';
import { CustomMatAccordionComponent } from './custom-mat-accordion/custom-mat-accordion.component';
import { CustomMatExpansionPanelComponent } from './custom-mat-accordion/custom-mat-expansion-panel/custom-mat-expansion-panel.component';
import { CustomMatPanelDescriptionComponent } from './custom-mat-accordion/custom-mat-panel-description/custom-mat-panel-description.component';
import { NeumorphismTemplateComponent } from './neumorphism-template/neumorphism-template.component';
import { CustomMatStepperModule } from './custom-mat-stepper/custom-mat-stepper.module';
import { UploadServiceValidatorService } from './form-components/Upload/service/upload-service-validator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormComponentsComponent } from './form-components/Upload/upload-components/form-components.component';

@NgModule({
  declarations: [
    CustomModelComponent,
    CustomModelHeaderComponent,
    CustomMatAccordionComponent,
    CustomMatExpansionPanelComponent,
    CustomMatPanelDescriptionComponent,
    NeumorphismTemplateComponent,
    FormComponentsComponent
  ],
  imports: [
    CommonModule,
    CustomMatStepperModule,
    FormsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [UploadServiceValidatorService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CustomModelComponent,
    CustomModelHeaderComponent,
    CustomMatAccordionComponent,
    CustomMatExpansionPanelComponent,
    CustomMatPanelDescriptionComponent,
    CustomMatStepperModule,
    FormsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormComponentsComponent
  ]
})
export class CustomComponentModule { }
