package com.estech.tarea2AD.controller;

import com.estech.tarea2AD.model.Client;
import com.estech.tarea2AD.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<?> getAllClients() {
        return new ResponseEntity<>(clientService.getAllClients(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> saveClient(@RequestBody Client client) {
        return new ResponseEntity<>(clientService.saveClient(client), HttpStatus.CREATED);
    }

}
