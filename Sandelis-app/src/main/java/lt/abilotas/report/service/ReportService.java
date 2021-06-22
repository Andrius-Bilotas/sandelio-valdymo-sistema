package lt.abilotas.report.service;

import lombok.RequiredArgsConstructor;
import lt.abilotas.clients.DAO.ClientDAO;
import lt.abilotas.clients.service.ClientMapper;
import lt.abilotas.inventory.DAO.InventoryDAO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ClientDAO clientDAO;
    private final InventoryDAO inventoryDAO;
    private final ClientMapper clientMapper;

    public ReportDTO generateReport() {
        ReportDTO report = new ReportDTO();
        var clients = clientDAO.findAll();
        var inventories = inventoryDAO.findAll();
        clients.sort((a, b) -> {
            return b.getInventory().stream()
                    .map(item -> item.getWeight()).reduce(0, (c, d) -> c + d) - a.getInventory().stream().map(item -> item.getWeight()).reduce(0, (c, d) -> c + d);
        });
        report.setClientsWithBiggestInventoryWeight(clients.stream()
            .map(clientMapper::mapFromClientToClientDTOWithInventory)
            .limit(5)
            .collect(Collectors.toList()));

        clients.sort((a, b) -> {
            return b.getInventory().size() - a.getInventory().size();
        });
        report.setClientsWithMostInventoryItems(clients.stream()
            .map(clientMapper::mapFromClientToClientDTOWithInventory)
            .limit(5)
            .collect(Collectors.toList()));
        List<Sector> sectors = new ArrayList<>();
        for (int i = 1; i <= 40; i++) {
            var sector = new Sector();
            sector.setSectorNumber(i);
            sector.setTotalItemCount(inventories.stream()
                .filter(item -> item.getSector() == sector.getSectorNumber())
                .count());
            sector.setTotalWeight(inventories.stream()
                .filter(item -> item.getSector() == sector.getSectorNumber())
                .map(item -> item.getWeight())
                .reduce(0, (a, b) -> a + b));
            sectors.add(sector);
        }
        sectors.sort((a, b) -> {
            return b.getTotalWeight() - a.getTotalWeight();
        });
        report.setSectorsWithBiggestInventoryWeight(sectors.stream()
            .limit(5)
            .collect(Collectors.toList()));

        sectors.sort((a, b) -> {
            return (int)b.getTotalItemCount() - (int)a.getTotalItemCount();
        });

        report.setSectorsWithMostInventoryItems(sectors.stream()
            .limit(5)
            .collect(Collectors.toList()));
        return report;
    }

}
