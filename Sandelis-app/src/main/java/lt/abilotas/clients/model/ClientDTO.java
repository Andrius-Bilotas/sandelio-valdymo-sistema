package lt.abilotas.clients.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.abilotas.inventory.model.InventoryItemDTO;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientDTO {

    private Long id;
    private String firstname;
    private String lastname;
    private Date birthdate;
    private String phone;
    private ClientType clientType;
    Set<InventoryItemDTO> inventory = new HashSet<>();

}
