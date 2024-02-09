import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { CustomDropdownComponent } from '.././custom/custom-dropdown/custom-dropdown.component'
import { PopupOpenDirective } from "../custom/PopupOpen/popup-open.directive";
import { CustomModelComponent } from '../custom/custom-model/custom-model.component';
import { OpenPopUpDirective } from "../custom/custom-model/CustomPopupOpen/open-pop-up.directive";
import { NgDropdownCustomComponent } from "../custom/ng-dropdown-custom/ng-dropdown-custom.component";
import { CustomsliderComponent } from '../custom/customslider/customslider.component';
import { CustomEventDirective } from "../custom/custom-model/custom-event.directive";
import { NgCustomTooltipsComponent } from "../custom/ng-custom-tooltips/ng-custom-tooltips.component";
import { CustomHeaderTooltipsComponent } from "../custom/ng-custom-tooltips/custom-header-tooltips/custom-header-tooltips.component";
import { CustomFooterTooltipsComponent } from "../custom/ng-custom-tooltips/custom-footer-tooltips/custom-footer-tooltips.component";
import { CustomContentTooltipsComponent } from "../custom/ng-custom-tooltips/custom-content-tooltips/custom-content-tooltips.component";
import { NgCustomCardModelComponent } from "../custom/ng-custom-card-model/ng-custom-card-model.component";
import { CustomConfirmDialogModelComponent } from '../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component'
import { NgCustomInputComponent } from "../custom/ng-custom-input/ng-custom-input.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { PdfViwerComponent } from "../custom/pdf-viewer/pdf-viewer.component";
import { MainServiceService } from "../service/main-service.service";
import { CustomComponentModule } from "../Custom-Component/custom-component.module";

@NgModule({
  declarations: [
    CustomDropdownComponent,
    PopupOpenDirective,
    OpenPopUpDirective,
    CustomModelComponent,
    NgDropdownCustomComponent,
    CustomsliderComponent,
    CustomEventDirective,
    NgCustomTooltipsComponent,
    CustomHeaderTooltipsComponent,
    CustomFooterTooltipsComponent,
    CustomContentTooltipsComponent,
    NgCustomCardModelComponent,
    CustomConfirmDialogModelComponent,
    NgCustomInputComponent,
    PdfViwerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    DropzoneModule,
    ReactiveFormsModule,
  ],
  providers: [MainServiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    MatProgressBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    CustomComponentModule,
    MatRadioModule,
    ReactiveFormsModule,
    CustomDropdownComponent,
    PopupOpenDirective,
    OpenPopUpDirective,
    CustomModelComponent,
    NgDropdownCustomComponent,
    CustomsliderComponent,
    CustomEventDirective,
    NgCustomTooltipsComponent,
    CustomHeaderTooltipsComponent,
    CustomFooterTooltipsComponent,
    CustomContentTooltipsComponent,
    NgCustomCardModelComponent,
    CustomConfirmDialogModelComponent,
    NgCustomInputComponent,
    PdfViwerComponent,
  ],
})
export class SharedHomeModule { }
