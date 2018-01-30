import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  private showSet = false;
  private myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      question1: new FormControl(),
      question2: new FormControl(),
      question3: new FormControl(),
      question4: new FormControl(),
      question5: new FormControl(),
      question6: new FormControl(),
    });
  }

  checkboxValue(selectedValue) {
    console.log(selectedValue.source.value);
    this.showSet = !this.showSet;
  }


}
