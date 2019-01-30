import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss']
})
export class FieldBuilderComponent implements OnInit {

  @Input() field: any;
  @Input() form: any;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  constructor() { }

  ngOnInit() {
    console.log('form', this.form);

  }
}
