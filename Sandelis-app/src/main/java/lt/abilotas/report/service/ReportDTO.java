package lt.abilotas.report.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.abilotas.clients.model.ClientDTO;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportDTO {

    private List<ClientDTO> clientsWithBiggestInventoryWeight;
    private List<ClientDTO> clientsWithMostInventoryItems;
    private List<Sector> sectorsWithBiggestInventoryWeight;
    private List<Sector> sectorsWithMostInventoryItems;

}
