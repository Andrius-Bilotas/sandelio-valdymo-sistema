package lt.abilotas.clients.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Clients",
    uniqueConstraints = { @UniqueConstraint(columnNames = {"firstname", "lastname", "birthdate"})})
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    @Temporal(TemporalType.DATE)
    private Date birthdate;
    private String phone;
    @Enumerated(EnumType.STRING)
    private ClientType clientType;


}
