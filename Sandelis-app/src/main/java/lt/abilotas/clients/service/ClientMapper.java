package lt.abilotas.clients.service;

import lt.abilotas.clients.model.Client;
import lt.abilotas.clients.model.ClientDTO;
import org.springframework.stereotype.Component;

@Component
public class ClientMapper {

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
