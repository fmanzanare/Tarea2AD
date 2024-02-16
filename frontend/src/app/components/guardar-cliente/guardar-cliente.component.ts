import { Component } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent {

  name: string = ''
  lastname: string = ''
  email: string = ''
  phone: string = ''

  client: Client = new Client()

  constructor(private clientService: ClientService) {

  }

  save(): void {

    this.client.name = this.name
    this.client.lastname = this.lastname
    this.client.email = this.email
    this.client.phone = this.phone

    this.clientService.saveClient(this.client).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    })
  }

}
