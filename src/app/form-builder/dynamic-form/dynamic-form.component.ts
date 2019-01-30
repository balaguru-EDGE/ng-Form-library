import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any;
  form: FormGroup;
  constructor() {
  }

  ngOnInit() {
    console.log('fieldsCon', this.fields);
    if (this.fields) {
      const fieldsCtrls = {};
      for (const f of this.fields) {
        console.log('this.fields', this.fields);
        if (f.type !== 'checkbox') {
          fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
        } else {
          const opts = {};
          for (const opt of f.options) {
            opts[opt.key] = new FormControl(opt.value);
          }
          fieldsCtrls[f.name] = new FormGroup(opts);
        }
      }
      console.log('fieldsCtrls', fieldsCtrls);
      this.form = new FormGroup(fieldsCtrls);
    }
  }
 }
