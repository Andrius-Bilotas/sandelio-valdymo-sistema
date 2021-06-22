package lt.abilotas.inventory.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lt.abilotas.clients.model.Client;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private int weight;

    @Min(value=1, message="Sektorius negali buti maziau 1")
    @Max(value=40, message="Sektorius negali buti didesnis 40")
    private int sector;

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date dateAdded = new Date();

    @ManyToOne
    @JoinColumn(name="client_id", nullable = false)
    @EqualsAndHashCode.Exclude
    private Client client;


}
