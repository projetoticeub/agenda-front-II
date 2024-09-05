import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfissionalDeSaude } from 'src/app/ProfissionaisDeSaude';
import { ProfissionaisDaSaudeService } from './../../services/profissionaisDaSaude.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AdicionarProfissional',
  templateUrl: './AdicionarProfissional.component.html',
  styleUrls: ['./AdicionarProfissional.component.css']
})
export class AdicionarProfissionalComponent implements OnInit {
  form!: FormGroup;
  ufs: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ]; // Estados brasileiros

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ProfissionaisDaSaudeService: ProfissionaisDaSaudeService,
    private dialogRef: MatDialogRef<AdicionarProfissionalComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      registro: ['', Validators.required],
      genero: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        rua: [''],
        numero: [''],
        cidade: [''],
        estado: ['']
      })
    });
  }

  buscarEnderecoPorCep(): void {
    const cep = this.form.get('endereco.cep')?.value;
    if (cep && cep.length === 8) {
      this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe(data => {
        if (data) {
          this.form.patchValue({
            endereco: {
              rua: data.logradouro,
              cidade: data.localidade,
              estado: data.uf
            }
          });
        }
      });
    }
  }

  onSave(): void {
    if (this.form.valid) {
      const profissional: ProfissionalDeSaude = {
        id: 0,
        nomeCompleto: this.form.value.nomeCompleto,
        cpf: this.form.value.cpf,
        dataNascimento: this.form.value.dataNascimento,
        telefone: this.form.value.telefone,
        email: this.form.value.email,
        registro: this.form.value.registro,
        genero: this.form.value.genero,
        cep: this.form.value.endereco.cep,
        endereco: `${this.form.value.endereco.rua}, ${this.form.value.endereco.numero}, ${this.form.value.endereco.cidade}, ${this.form.value.endereco.estado}`
      };

      this.ProfissionaisDaSaudeService.addProfissional(profissional).subscribe({
        next: (novoProfissional: ProfissionalDeSaude) => {
          console.log('Profissional salvo com sucesso:', novoProfissional);
          this.dialogRef.close(novoProfissional);
        },
        error: (error) => {
          console.error('Erro ao salvar profissional:', error);
        }
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}