package lt.abilotas.clients;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.model.ClientDTO;
import lt.abilotas.clients.service.ClientService;
import lt.abilotas.inventory.model.InventoryItemDTO;
import lt.abilotas.inventory.service.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientService clientService;
    private final InventoryService inventoryService;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        return ResponseEntity.ok(clientService.getAllClients());
    }

    @PostMapping
    public ResponseEntity<List<ClientDTO>> addClient(@RequestBody ClientDTO client) {
        return ResponseEntity.ok(clientService.addClient(client));
    }

    @GetMapping("/{clientId}")
    public ResponseEntity<ClientDTO> getClientById(@PathVariable Long clientId) {
        return ResponseEntity.ok(clientService.getClientById(clientId));
    }

    @PostMapping("/{clientId}")
    public ResponseEntity<String> addInventoryItemForClient(@RequestBody InventoryItemDTO itemDTO) {
        inventoryService.addInventoryItemToClient(itemDTO);
        return ResponseEntity.ok("");
    }

    @DeleteMapping("/{clientId}/{itemId}")
    public ResponseEntity<ClientDTO> deleteInventoryItemFromClient(@PathVariable Long clientId, @PathVariable Long itemId) {
        inventoryService.deleteInventoryItemFromClient(clientId, itemId);
        return ResponseEntity.ok(clientService.getClientById(clientId));
    }

    //For testing purposes
    @RequestMapping(path ="/test", method = RequestMethod.GET)
    public String forTestPurposes() {
        return "Hello";
    }

}
