package top.wang.requestservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.Disposable;
import reactor.core.publisher.Mono;

@RestController
public class ConsumerController3 {
    private final String SERVICE_URL = "http://localhost:8081";
    private final String SERVICE_URL1="https://www.wanandroid.com";

    private final WebClient webClient = WebClient.builder()
            .baseUrl(SERVICE_URL)
            .build();
    private final WebClient webClient1 = WebClient.builder()
            .baseUrl(SERVICE_URL1)
            .build();

    @GetMapping("/webClientTest")
    public String webClientTest() {
        Mono<String> mono = webClient
                .get()
                .uri("/hello")
                .retrieve()
                .bodyToMono(String.class);
        mono.subscribe(System.out::println);
        return "请求成功";
    }
    @GetMapping("/webClientTest1")
    public Mono<String>  webClientTest1() {
        Mono<String> mono = webClient1
                .get()
                .uri("/project/list/1/json")
                .retrieve()
                .bodyToMono(String.class);

        return mono;
    }
}
