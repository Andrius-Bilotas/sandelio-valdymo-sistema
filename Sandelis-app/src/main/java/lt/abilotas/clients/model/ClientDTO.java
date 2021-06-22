package lt.abilotas.clients.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

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

}
