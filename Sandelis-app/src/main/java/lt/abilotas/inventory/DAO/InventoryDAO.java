package lt.abilotas.inventory.DAO;

import lt.abilotas.inventory.model.InventoryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryDAO extends JpaRepository<InventoryItem, Long> {
}
