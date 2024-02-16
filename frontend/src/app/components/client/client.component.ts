import { Component } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clients: Client[] = []

  constructor(private clientService: ClientService) {
    this.listAll()
  }

  listAll(): void {
    this.clientService.getAllClients().subscribe( {
      next: res => {
        this.clients = res
      },
      error: err => console.error(err)
    })
  }
}
