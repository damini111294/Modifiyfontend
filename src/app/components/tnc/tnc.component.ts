import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class tncComponent implements OnInit {

     
  constructor(private _router : Router) {}  
    
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
}
