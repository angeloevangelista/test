import { Component, Input, OnInit } from '@angular/core';

interface IDadosEmpresasCadastradas {
  fonte: string;
  quantidade: number;
  valorTotal: number;
}

@Component({
  selector: 'app-totalizador-grupo',
  templateUrl: './totalizador-grupo.component.html',
  styleUrls: ['./totalizador-grupo.component.scss'],
})
export class TotalizadorGrupoComponent implements OnInit {
  @Input() dadosEmpresas: IDadosEmpresasCadastradas[];

  ngOnInit() {
    this.dadosEmpresas = [
      {
        fonte: 'CCDS',
        quantidade: 971,
        valorTotal: 72769.69,
      },
      {
        fonte: 'Serasa',
        quantidade: 8,
        valorTotal: 1000,
      },
    ];
  }

  get quantidadeTotal(): number {
    return this.dadosEmpresas.reduce((a, b) => a + b.quantidade, 0);
  }

  get valorTotal(): number {
    return this.dadosEmpresas.reduce((a, b) => a + b.valorTotal, 0);
  }
}
