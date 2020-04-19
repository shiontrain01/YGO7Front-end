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
  templateUrl: './link-monster.component.html',
  styleUrls: ['./link-monster.component.scss']
})

export class LinkMonsterComponent implements OnInit {

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
          'LinkSummonRequirement': new FormControl(this.card.LinkSummonRequirement, [
            Validators.minLength(1),
            Validators.maxLength(255)
          ]),
          'MonstersNeededLink': new FormControl(this.card.MonstersNeededLink, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255)
          ]
          ),
          'LinkGrade': new FormControl(this.card.LinkGrade, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowSuperiorEsquerdo': new FormControl(this.card.ArrowSuperiorEsquerdo, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ), 'ArrowSuperiorCentro': new FormControl(this.card.ArrowSuperiorCentro, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowSuperiorDireito': new FormControl(this.card.ArrowSuperiorDireito, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowCentralEsquerdo': new FormControl(this.card.ArrowCentralEsquerdo, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowCentralDireito': new FormControl(this.card.ArrowCentralDireito, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowInferiorEsquerdo': new FormControl(this.card.ArrowInferiorEsquerdo, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowInferiorCentral': new FormControl(this.card.ArrowInferiorCentral, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          ),
          'ArrowInferiorDireito': new FormControl(this.card.ArrowInferiorDireito, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4)
          ]
          )
        });

      }

}
