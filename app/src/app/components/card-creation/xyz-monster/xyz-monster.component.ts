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
  selector: 'app-xyz-monster',
  templateUrl: './xyz-monster.component.html',
  styleUrls: ['./xyz-monster.component.scss']
})

export class XyzMonsterComponent implements OnInit {

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
          'XyzSummonRequirement': new FormControl(this.card.XyzSummonRequirement, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'XyzRank': new FormControl(this.card.XyzRank, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'MaterialsNeededMMin': new FormControl(this.card.MaterialsNeededMMin, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'MaterialsNeededMax': new FormControl(this.card.MaterialsNeededMax, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          )
        });

      }
}
