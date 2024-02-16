import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { GuardarClienteComponent } from './components/guardar-cliente/guardar-cliente.component';

const routes: Routes = [
  {path: '', component: ClientComponent},
  {path: 'save-client', component: GuardarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
