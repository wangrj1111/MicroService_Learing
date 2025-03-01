package top.wang.helloservice.service;

import org.springframework.stereotype.Service;

@Service
public class HelloService {

    public String getName(){
        return "hello Service";
    }
    public String sayHello(String name){
        return "hello  "+name;
    }
}
