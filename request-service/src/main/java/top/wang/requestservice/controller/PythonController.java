package top.wang.requestservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import top.wang.requestservice.openfeign.PythonService;

@RestController

public class PythonController {
    @Autowired
    private PythonService pythonService;
    @GetMapping("/python")
    public String getPython() {
       return   pythonService.getPython();
    }
}
