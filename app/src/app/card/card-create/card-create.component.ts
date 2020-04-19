import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Card-create',
  templateUrl: './Card-create.component.html',
  styleUrls: ['./Card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  id: number;
  airp: Card;
  CardForm: FormGroup;

  constructor(
    public apiService: ApiService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.airp = new Card();
  }

  ngOnInit() {
    this.CardForm = new FormGroup({
      'CardId': new FormControl(this.airp.CardId, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]),
      'CardName': new FormControl(this.airp.CardName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
      ),
      'Stars': new FormControl(this.airp.Stars, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(4)
      ]
      )
    });

  }

  get CardId() { return this.CardForm.get('CardId'); }

  get CardName() { return this.CardForm.get('CardName'); }

  get Stars() { return this.CardForm.get('Stars'); }

  submitForm() {
    this.apiService.createItem(this.airp).subscribe((response) => {
      if(response.sucesso)
      {
        this.router.navigate(['/Card/list']);
      }
      else
      {
        this.toastr.error(response.mensagem , 'Major Error', {timeOut: 3000});
      }
    });

  }

}
