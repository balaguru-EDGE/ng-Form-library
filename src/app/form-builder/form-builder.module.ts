import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldBuilderComponent } from './dynamic-form/field-builder/field-builder.component';
import { CheckboxComponent } from './dynamic-form/fields/checkbox/checkbox.component';
import { TextboxComponent } from './dynamic-form/fields/textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dynamic-form/fields/dropdown/dropdown.component';
import { RadioComponent } from './dynamic-form/fields/radio/radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormComponent, FieldBuilderComponent, CheckboxComponent, TextboxComponent, DropdownComponent, RadioComponent],
  exports: [DynamicFormComponent],
})
export class FormBuilderModule { }
