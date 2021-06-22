package lt.abilotas.inventory.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryItemDTO {

    private Long id;
    private String name;
    private int weight;
    private int sector;
    private Date dateAdded;
    private Long clientId;

}
