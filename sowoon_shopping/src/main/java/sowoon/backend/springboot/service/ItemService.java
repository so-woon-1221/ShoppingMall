package sowoon.backend.springboot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sowoon.backend.springboot.domain.item.Items;
import sowoon.backend.springboot.web.dto.ItemSaveRequestDto;

import java.util.*;

@RequiredArgsConstructor
@Service
public class ItemService {
    @Autowired
    private final MongoTemplate mongoTemplate;

    @Transactional
    public Items save(ItemSaveRequestDto itemSaveRequestDto) {
        if (itemSaveRequestDto.getName().isEmpty() || itemSaveRequestDto.getContent().isEmpty() || itemSaveRequestDto.getPrice().isEmpty()
                || itemSaveRequestDto.getTags().length == 0) {
            throw new IllegalArgumentException("빈칸을 모두 채우세요");
        }
        Items newItems = itemSaveRequestDto.toEntity();
        mongoTemplate.insert(newItems);
        return newItems;
    }

    @Transactional
    public List<Items> list() {
        System.out.println("asdfasdfasdfasdf");
        return mongoTemplate.findAll(Items.class);
    }

    @Transactional
    public List<Items> search(String text) {
        System.out.println(text);
        Criteria criteria = new Criteria();
        criteria.orOperator(Criteria.where("name").regex(text), Criteria.where("tags").regex(text));
        Query query = new Query(criteria);
        return mongoTemplate.find(query, Items.class);
    }

    @Transactional
    public Items read(String id) {
        Items item = mongoTemplate.findById(id, Items.class);
        return item;
    }
}
