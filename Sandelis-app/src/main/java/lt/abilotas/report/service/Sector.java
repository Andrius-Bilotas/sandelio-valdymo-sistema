package lt.abilotas.report.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sector {

    private int sectorNumber;
    private int totalWeight;
    private long totalItemCount;

}
