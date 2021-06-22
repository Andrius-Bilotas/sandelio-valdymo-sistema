package lt.abilotas.clients.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lt.abilotas.inventory.model.InventoryItem;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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

    @NotNull
    private String firstname;

    @NotNull
    private String lastname;

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date birthdate;

    @NotNull
    private String phone;

    @Enumerated(EnumType.STRING)
    @NotNull
    private ClientType clientType;

    @OneToMany(mappedBy="client")
    @EqualsAndHashCode.Exclude
    private Set<InventoryItem> inventory = new HashSet<>();

    public void addInventoryItem(InventoryItem item) {
        this.inventory.add(item);
    }


}
