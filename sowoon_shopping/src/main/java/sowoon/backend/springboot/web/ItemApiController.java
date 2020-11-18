package sowoon.backend.springboot.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import sowoon.backend.springboot.domain.item.Items;
import sowoon.backend.springboot.service.ItemService;
import sowoon.backend.springboot.web.dto.ItemSaveRequestDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ItemApiController {
    private final ItemService itemService;

    @PostMapping("/api/input")
    public Items save(@RequestBody ItemSaveRequestDto itemSaveRequestDto){
        return itemService.save(itemSaveRequestDto);
    }

    @GetMapping("/api/items")
    public List<Items> list() {
        return itemService.list();
    }

    @GetMapping("/api/search/{text}")
    public List<Items> search(@PathVariable String text) {
        List<Items> answer;
        answer = itemService.search(text);
        return answer;
    }
}
