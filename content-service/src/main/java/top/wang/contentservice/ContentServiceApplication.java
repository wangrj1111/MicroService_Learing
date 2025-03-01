package top.wang.contentservice;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import top.wang.contentservice.model.config.RandomLoadBalancerConfig;

@SpringBootApplication
@MapperScan(basePackages = "top.wang.contentservice.mapper")
@EnableFeignClients(basePackages = "top.wang.contentservice.openfeign")
@LoadBalancerClient(name = "user-service", configuration = RandomLoadBalancerConfig.class)
public class ContentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContentServiceApplication.class, args);
    }

}
