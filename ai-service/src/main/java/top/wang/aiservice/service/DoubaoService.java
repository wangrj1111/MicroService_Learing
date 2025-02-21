package top.wang.aiservice.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DoubaoService {

    @Autowired
    private RestTemplate restTemplate;

    public String queryDoubao(String query) {
        String url = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";
        String apiKey = "a5b265ef-77f1-4e8a-a79e-7972c3de70c6"; // 替换为你的 API Key
        String model = "deepseek-r1-250120"; // 替换为你的模型名称

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        String requestBody = String.format("""
                {
                    "model": "%s",
                    "messages": [
                        {"role": "system","content": "你是人工智能助手."},
                        {"role": "user","content": "%s"}
                    ]
                }
                """, model, query);

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, requestEntity, String.class);
        String responseBody = responseEntity.getBody();

        // 解析响应数据并提取 content
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(responseBody);
            JsonNode choicesNode = rootNode.path("choices");
            if (choicesNode.isArray() && choicesNode.size() > 0) {
                JsonNode messageNode = choicesNode.get(0).path("message");
                return messageNode.path("content").asText();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "No content found in response";
    }
}