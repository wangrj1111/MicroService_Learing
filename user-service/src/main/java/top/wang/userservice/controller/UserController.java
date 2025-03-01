package top.wang.userservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import top.wang.userservice.entity.User;
import top.wang.userservice.service.impl.UserServiceImpl;

@Slf4j
@RestController
public class UserController {
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/user/{Userid}")
    public User getUser(@PathVariable int Userid) {
        log.info("服务被调用");
        return userService.getById(Userid);
    }

    @GetMapping("/userask")
    public String getUserAsk(@RequestParam String question){
        String askUrl="http://localhost:8084/ask?question="+question;
        String anwser = restTemplate.getForObject(askUrl, String.class);
        return "你的问题是:"+question+"\n"+"ai回答："+anwser;
    }
}