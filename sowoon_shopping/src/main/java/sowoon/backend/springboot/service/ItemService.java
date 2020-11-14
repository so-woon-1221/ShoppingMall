package sowoon.backend.springboot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sowoon.backend.springboot.domain.item.ItemRepository;
import sowoon.backend.springboot.web.dto.ItemSaveRequestDto;

@RequiredArgsConstructor
@Service
public class ItemService {
    private final MongoTemplate mongoTemplate;

    @Transactional
    public Long save(ItemSaveRequestDto itemSaveRequestDto){
        return mongoTemplate.insert(itemSaveRequestDto.toEntity()).getId();
    }
}
