package lt.abilotas.report;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/reports")
@RequiredArgsConstructor
public class ReportController {
}
