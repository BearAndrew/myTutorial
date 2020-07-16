import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      ctrl_1: ['', Validators.required],
      ctrl_2: ['', [Validators.required, Validators.minLength(3), this.forbiddenWordValidator(/\badmin\b/i)] ]
    });
  }

  forbiddenWordValidator(wordRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = wordRe.test(control.value);
      return forbidden ? {forbiddenWord: {value: control.value}} : null;
    };
  }

  get ctrl_1() { return this.fg.get('ctrl_1'); }

  get ctrl_2() { return this.fg.get('ctrl_2'); }
}
