package lt.abilotas.clients.service;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.DAO.ClientDAO;
import lt.abilotas.clients.model.ClientDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClientService {

    private final ClientDAO clientDAO;
    private final ClientMapper clientMapper;

    public List<ClientDTO> getAllClients() {
        return clientDAO.findAll().stream()
                .map(clientMapper::mapFromClientToClientDTO)
                .collect(Collectors.toList());
    }

    public List<ClientDTO> addClient(ClientDTO client) {
        clientDAO.save(clientMapper.mapFromClientDTOToClient(client));
        return getAllClients();
    }

}
