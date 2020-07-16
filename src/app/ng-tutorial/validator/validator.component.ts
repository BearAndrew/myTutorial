import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  fg: FormGroup;
  cssClassName: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      account: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
      nickName: ['', [Validators.required, this.forbiddenNameValidator(/\badmin\b/i)] ],
      radio: ['', Validators.required]
    });
  }

  get name() { return this.fg.get('name'); }

  get account() { return this.fg.get('account'); }

  get nickName() { return this.fg.get('nickName'); }

  get radio() { return this.fg.get('radio'); }


  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  toggle(param) {
    if (param) {this.nickName.enable();
    } else { this.nickName.disable(); }
  }

}
