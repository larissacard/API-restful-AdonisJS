import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.scss']
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar'
  
  constructor(
    private momentService: MomentService, 
    private messageService: MessagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);

    formData.append("description", moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    //todo
    await this.momentService.createMoment(formData).subscribe();
    
    //exibir mesagens
    await this.messageService.add("Momento adicionado com sucesso!")

    //redirect
    this.router.navigate(['/'])
  }

}
