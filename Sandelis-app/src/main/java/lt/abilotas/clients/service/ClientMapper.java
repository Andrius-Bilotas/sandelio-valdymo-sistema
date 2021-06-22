package lt.abilotas.clients.service;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.model.Client;
import lt.abilotas.clients.model.ClientDTO;
import lt.abilotas.inventory.service.InventoryMapper;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ClientMapper {

    private final InventoryMapper inventoryMapper;

    public ClientDTO mapFromClientToClientDTO(Client client) {
        ClientDTO clientDTO = new ClientDTO();
        clientDTO.setId(client.getId());
        clientDTO.setFirstname(client.getFirstname());
        clientDTO.setLastname(client.getLastname());
        clientDTO.setBirthdate(client.getBirthdate());
        clientDTO.setPhone(client.getPhone());
        clientDTO.setClientType(client.getClientType());
        return clientDTO;
    }

    public ClientDTO mapFromClientToClientDTOWithInventory(Client client) {
        ClientDTO clientDTO = new ClientDTO();
        clientDTO.setId(client.getId());
        clientDTO.setFirstname(client.getFirstname());
        clientDTO.setLastname(client.getLastname());
        clientDTO.setBirthdate(client.getBirthdate());
        clientDTO.setPhone(client.getPhone());
        clientDTO.setClientType(client.getClientType());
        clientDTO.setInventory(client.getInventory().stream()
                .map(inventoryMapper::mapFromInventoryItemToInventoryItemDTO)
                .collect(Collectors.toSet()));
        return clientDTO;
    }

    public Client mapFromClientDTOToClient(ClientDTO clientDTO) {
        Client client = new Client();
        client.setFirstname(clientDTO.getFirstname());
        client.setLastname(clientDTO.getLastname());
        client.setBirthdate(clientDTO.getBirthdate());
        client.setPhone(clientDTO.getPhone());
        client.setClientType(clientDTO.getClientType());
        return client;
    }

}
