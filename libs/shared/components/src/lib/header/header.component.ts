import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shopping-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public checkboxGroupForm: FormGroup = Object.create(null);

  public radioGroupForm: FormGroup = Object.create(null);

  constructor(private formBuilder: FormBuilder) { }

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }

}
