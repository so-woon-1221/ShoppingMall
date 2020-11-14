package sowoon.backend.springboot.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sowoon.backend.springboot.domain.item.Items;
import sowoon.backend.springboot.domain.item.ItemRepository;

import java.util.List;

@RestController
public class HelloController {
    @Autowired
    MongoTemplate mongoTemplate;

    private ItemRepository itemRepository;
    @GetMapping("/")
    public String hello() {
        List<Items> list = mongoTemplate.findAll(Items.class);
        Items item = mongoTemplate.findById(1, Items.class);
        System.out.println(item.getPrice());
        return "hello!!";
    }
}
