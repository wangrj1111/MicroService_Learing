package top.wang.helloservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import top.wang.helloservice.service.HelloService;

@RestController
public class HelloController {
    @Autowired
    private HelloService service;

    @GetMapping("/hello")
    public String Hello(){
        return "hello from  "+service.getName();
    }

    @GetMapping("/sayHello")
    public String sayHello(@RequestParam String name){
        return service.sayHello(name);
    }
}
