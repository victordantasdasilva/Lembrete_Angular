import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];

  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  getListaLembretes(){
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => {this.erroMsgComponent.setError('Falha ao buscar lembrete.'); });
  }

  deletaLembrete(id: number){
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => {this.erroMsgComponent.setError('Falha ao deletar lembrete.'); });
  }

  existemLembretes(): boolean{
    return this.lembretes && this.lembretes.length > 0;
  }

}
