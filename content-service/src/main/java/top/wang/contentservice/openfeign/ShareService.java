package top.wang.contentservice.openfeign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import top.wang.contentservice.model.vo.UserVO;

@FeignClient(name="user-service")
public interface ShareService {
    @GetMapping( value = "/user/{Userid}")
    UserVO ShareUser(@PathVariable int Userid);
}
