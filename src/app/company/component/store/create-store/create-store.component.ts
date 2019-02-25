import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../../model/store.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  @Input() store: Store;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [
        this.store ? this.store.name : '',
        [Validators.required, Validators.minLength(2)]
      ],
      email: [
        this.store ? this.store.email : '',
        [Validators.required, Validators.email]
      ],
      phone: [
        this.store ? this.store.phone : ''
      ]
    });
  }

  saveStore(formValue: Store) {
    console.log(formValue);
  }

  formCheck() {
    console.log(this.form.controls['name'].status);
    console.log(this.form.controls['email'].valid);
  }
}
