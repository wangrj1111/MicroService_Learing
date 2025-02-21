package top.wang.orderservice.controller;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class orderController {
    @Resource
    private RestTemplate restTemplate;

    @GetMapping("/order")
    public String creatOrder(@RequestParam int orderId,@RequestParam String username,@RequestParam String productId){
        String userServiceUrl ="http://localhost:8081/user?username="+username;
        String productServiceUrl="http://localhost:8083/product?productId="+productId;
        String userInfo = restTemplate.getForObject(userServiceUrl, String.class);
        String productInfo=restTemplate.getForObject(productServiceUrl,String.class);
        return "订单编号："+orderId+"\t"+ "下单人："+userInfo+"\t"+"商品信息："+productInfo;
    }

    @GetMapping("/node")
    public String getNodeJS(@RequestParam String name){
        String nodeUrl="http://localhost:3000/greet"+name;
        return "调用Node.js服务问好：你好,"+name;
    }

}
