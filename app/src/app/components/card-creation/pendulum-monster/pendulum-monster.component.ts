import { Component, OnInit } from '@angular/core';
import { Card } from 'c:/yugiohSevensFinal/AirplaneFront-master/app/src/app/models/card';
import { ApiService } from 'c:/yugiohSevensFinal/AirplaneFront-master/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'table-basic-example',
  templateUrl: './pendulum-monster.component.html',
  styleUrls: ['./pendulum-monster.component.scss']
})

export class PendulumMonsterComponent implements OnInit {
    id: number;
    card: Card;
    CardForm: FormGroup;

  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.card = new Card();
  }

  
    ngOnInit() {
        this.CardForm = new FormGroup({
          'PendulumScale': new FormControl(this.card.PendulumScale, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'PendulumEffect': new FormControl(this.card.PendulumEffect, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          )
        
        });
    
      }

}