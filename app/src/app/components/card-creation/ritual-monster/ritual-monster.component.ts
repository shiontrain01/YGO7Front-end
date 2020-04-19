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
  selector: 'table-basic-example',
  templateUrl: './ritual-monster.component.html',
  styleUrls: ['./ritual-monster.component.scss']
})

export class RitualMonsterComponent implements OnInit {

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
          'RitualSummonRequirement': new FormControl(this.card.RitualSummonRequirement, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'RitualLevelMin': new FormControl(this.card.RitualLevelMin, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'MonsterNeededRitual': new FormControl(this.card.MonsterNeededRitual, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
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
