package lt.abilotas.clients.DAO;

import lt.abilotas.clients.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDAO extends JpaRepository<Client, Long> {
}
