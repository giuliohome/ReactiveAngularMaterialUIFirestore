import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

import {FormControl} from '@angular/forms';
import firebase from 'firebase';
import moment from 'moment';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})


export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  
  computeAge(): number {
    return moment().diff(this.customer.birth,'years');
  }
  submitted = false;

  

  constructor(private customerService: CustomerService) {  }

  ngOnInit() {
    this.customer = new Customer();
    this.customer.birth =  new Date((new Date()).getTime() + 24*60*60*1000);
    this.customer.name = ""
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
    this.customer.birth =  new Date((new Date()).getTime() + 24*60*60*1000);
    this.customer.name = ""
  }

  save() {
    this.customer.birth = new Date(this.customer.birth);
    this.customer.birthDB = firebase.firestore.Timestamp.fromDate(this.customer.birth);
    this.customerService.createCustomer(this.customer);
    this.customer = new Customer();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
