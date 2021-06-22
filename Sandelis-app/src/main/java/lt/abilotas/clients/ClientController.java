package lt.abilotas.clients;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.model.ClientDTO;
import lt.abilotas.clients.service.ClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientService;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        return ResponseEntity.ok(clientService.getAllClients());
    }

    @PostMapping
    public ResponseEntity<List<ClientDTO>> addClient(@RequestBody ClientDTO client) {
        return ResponseEntity.ok(clientService.addClient(client));
    }

    //For testing purposes
    @RequestMapping(path ="/test", method = RequestMethod.GET)
    public String forTestPurposes() {
        return "Hello";
    }

}
