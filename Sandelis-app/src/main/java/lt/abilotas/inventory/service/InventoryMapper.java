package lt.abilotas.inventory.service;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.DAO.ClientDAO;
import lt.abilotas.clients.model.Client;
import lt.abilotas.inventory.model.InventoryItem;
import lt.abilotas.inventory.model.InventoryItemDTO;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InventoryMapper {

    private final ClientDAO clientDAO;

    public InventoryItem mapFromInventoryItemDTOToInventoryItem(InventoryItemDTO itemDTO) {
        Client client = clientDAO.findById(itemDTO.getClientId()).orElse(null);
        if (client == null) {
            return null;
        }
        InventoryItem item = new InventoryItem();
        item.setName(itemDTO.getName());
        item.setWeight(itemDTO.getWeight());
        item.setSector(itemDTO.getSector());
        client.addInventoryItem(item);
        item.setClient(client);
        clientDAO.save(client);
        return item;
    }

    public InventoryItemDTO mapFromInventoryItemToInventoryItemDTO(InventoryItem item) {
        InventoryItemDTO itemDTO = new InventoryItemDTO();
        itemDTO.setId(item.getId());
        itemDTO.setName(item.getName());
        itemDTO.setWeight(item.getWeight());
        itemDTO.setSector(item.getSector());
        itemDTO.setDateAdded(item.getDateAdded());
        itemDTO.setClientId(item.getClient().getId());
        return itemDTO;
    }

}
