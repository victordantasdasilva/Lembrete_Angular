import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {

  public lembrete: Lembrete;
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private lembreteService: LembreteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.getLembrete(this.activatedRoute.snapshot.params.id);
    }

    getLembrete(id: number){
      this.lembreteService.getLembrete(id)
        .subscribe((lembrete: Lembrete) => {
          this.lembrete = lembrete;
        }, () => {this.erroMsgComponent.setError('Falha ao buscar lembrete.'); });
    }

    atualizaLembrete(lembrete: Lembrete){
      this.lembreteService.atualizaLembrete(lembrete)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.erroMsgComponent.setError('Falha ao atualizar lembrete.'); });
    }



}
