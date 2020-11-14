package sowoon.backend.springboot.web;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sowoon.backend.springboot.service.ItemService;
import sowoon.backend.springboot.web.dto.ItemSaveRequestDto;

@RequiredArgsConstructor
@RestController
public class ItemApiController {
    private final ItemService itemService;

    @PostMapping("/api/v1/register")
    public long save(@RequestBody ItemSaveRequestDto itemSaveRequestDto){
        return itemService.save(itemSaveRequestDto);
    }
}
