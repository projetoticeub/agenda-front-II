import { EditarProfissionalComponent } from './components/editar-profissional/editar-profissional.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './page/loginPage/loginPage.component';
import { HttpClientModule } from '@angular/common/http';
import { PacientesPageComponent } from './page/pacientesPage/pacientesPage.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { ProfissionaisDeSaudePagesComponent } from './page/profissionaisDeSaudePages/profissionaisDeSaudePages.component';
import { ProfissionaisDeSaudeComponent } from './components/ProfissionaisDeSaude/ProfissionaisDeSaude.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ConsultasPagesComponent } from './page/consultasPages/consultasPages.component';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { AdicionarPacienteComponent } from './components/adicionarPaciente/adicionarPaciente.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdicionarProfissionalComponent } from './components/AdicionarProfissional/AdicionarProfissional.component';
import { ConsultaListaComponent } from './components/consulta-lista/consulta-lista.component';
import { ConsultaListaPagesComponent } from './page/consulta-listaPages/consulta-listaPages.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroPageComponent } from './page/registro-page/registro-page.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { LogoComponent } from './components/logo/logo.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    PacientesPageComponent,
    PacientesComponent,
    SidebarComponent,
    ProfissionaisDeSaudePagesComponent,
    ProfissionaisDeSaudeComponent,
    ConsultasComponent,
    ConsultasPagesComponent,
    AdicionarPacienteComponent,
    AdicionarProfissionalComponent,
    ConsultaListaComponent,
    ConsultaListaPagesComponent,
    RegistroComponent,
    RegistroPageComponent,
    LogoComponent,
    EditarPacienteComponent,
    EditarProfissionalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    // Angular Material Modules
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,

    // PrimeNG Modules
    TableModule,
    SidebarModule,
    ButtonModule,
    PanelModule,
    InputNumberModule,
    CalendarModule,
    ToastModule,

    // Directives
    NgxMaskDirective
  ],
  providers: [MessageService, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
