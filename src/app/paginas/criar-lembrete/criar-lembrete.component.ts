import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembrete){
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => {this.router.navigateByUrl('/'); },
        () => {this.erroMsgComponent.setError('Falha ao adicionar lembrete.'); });
  }

}
