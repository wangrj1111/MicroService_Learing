package top.wang.requestservice.openfeign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(value = "node-service")
public interface NodeService {
    @GetMapping(value = "/user")
    String getUser();
}
