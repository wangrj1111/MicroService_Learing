package top.wang.requestservice.openfeign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(value = "python-service")
public interface PythonService {
    @GetMapping(value = "/shares")
    String getPython() ;
}
