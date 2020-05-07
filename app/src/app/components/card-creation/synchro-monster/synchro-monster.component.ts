import { Component, OnInit } from '@angular/core';
import { Card } from 'C:/git/YGO7Front-end/app/src/app/models/card';
import { ApiService } from 'C:/git/YGO7Front-end/app/src/app/services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-synchro-monster',
  templateUrl: './synchro-monster.component.html',
  styleUrls: ['./synchro-monster.component.scss']
})

export class SynchroMonsterComponent implements OnInit {

  public addresses: any[] = [{
    address: '',
    street: '',
    city: '',
    country: ''
  }];

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }


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
          'SynchroSummonRequirement': new FormControl(this.card.SynchroSummonRequirement, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'MonstersNeededSynchro': new FormControl(this.card.MonstersNeededSynchro, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          ),
          'TunersMonstersNeeded': new FormControl(this.card.TunersMonstersNeeded, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'TunersNeededMin': new FormControl(this.card.TunersNeededMin, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'TunersNeededMax': new FormControl(this.card.TunersNeededMax, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'Stars': new FormControl(this.card.Stars, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          )
        });

      }
}
