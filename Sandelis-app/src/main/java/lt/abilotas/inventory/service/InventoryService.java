package lt.abilotas.inventory.service;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.DAO.ClientDAO;
import lt.abilotas.inventory.DAO.InventoryDAO;
import lt.abilotas.inventory.model.InventoryItemDTO;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final InventoryDAO inventoryDAO;
    private final ClientDAO clientDAO;
    private final InventoryMapper inventoryMapper;


    public void addInventoryItemToClient(InventoryItemDTO itemDTO) {
        inventoryDAO.save(inventoryMapper.mapFromInventoryItemDTOToInventoryItem(itemDTO));
    }

    public void deleteInventoryItemFromClient(Long clientId, Long itemId) {
        var client = clientDAO.findById(clientId).orElse(null);
        if (client != null) {
            if (client.getInventory().stream()
                    .filter(item -> item.getId().equals(itemId))
                    .findAny().orElse(null) != null) {
                inventoryDAO.deleteById(itemId);
            }
        }
    }

}
