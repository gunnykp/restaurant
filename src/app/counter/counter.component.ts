import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  form: FormGroup;
  table : number = 0;
  customersTable = [];
  customers:any[];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

       customer: this.fb.array([
      
      ]),
    });
   }

  ngOnInit() {

  }
  addCreds() {
    const creds = this.form.controls['customer'] as FormArray;
    if(creds.length !== 5){
      creds.push(this.fb.group({
        username: '',
        number: '',
        reservationTime: '',
        tel:'',
        shopTimeIn : '',
        shopTimeOut : '',
      }));
    }
    
  }
  cal(){
   this.customers = this.form.get('customer').value;
  //  console.log(this.customers)
  this.customersTable = [];
    for(let i = 0; i <  this.customers.length ; i++){
      // console.log(this.customers);
   if(this.customers[i].number < 4){
      let dataSet = {
        username : this.customers[i].username,
        table : 1
      }
      this.customersTable.push(dataSet)
   }else{
   let v = this.customers[i].number / 4;
    let dataSet = {
      username : this.customers[i].username,
      table : Math.round(v)
    }
    this.customersTable.push(dataSet)
   }
    }
   

  }
  checkDuplicateReservationTime(e){
    var i = e.length, j, val;

    while (i--) {
        val = e[i];
        j = i;
        while (j--) {
            if (e[j] === val) {
                return true;
            }
        }
    }
    return false;
  }
  trackFn(index){
    return index;
  }
}
