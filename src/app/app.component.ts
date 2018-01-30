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
  private question4;
  private question3;
  private formData;

  ngOnInit() {
    this.myform = new FormGroup({
      question1: new FormControl(),
      question2: new FormControl(),
      question3: new FormControl(),
      question4: new FormControl(),
      question5: new FormControl(),
      question6: new FormControl(),
    });

    this.myform.controls.question4.valueChanges.subscribe(
      data => {
        console.log(data);
        this.showSet = !this.showSet;
      }
    );
  }

  showFormData() {
    this.formData = this.myform.value;
    this.formData.question3 = this.question3;
    this.formData.question4 = this.question4;
    console.log(this.formData);
  }

  onAnswer4(selectedValue) {
    this.question4 = selectedValue.source.value;
  }

  onAnswer3(selectedValue) {
    this.question3 = selectedValue.source.value;
    console.log(this.question3);
  }

}
