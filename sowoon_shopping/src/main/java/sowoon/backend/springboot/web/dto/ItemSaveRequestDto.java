package sowoon.backend.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sowoon.backend.springboot.domain.item.Items;

@Getter
@NoArgsConstructor
public class ItemSaveRequestDto {
    private String name;
    private String content;
    private String price;
    private String thumbnail;
    private String tags[];

    @Builder
    public ItemSaveRequestDto(String name, String content, String price, String thumbnail, String[] tags){
        this.name=name;
        this.price=price;
        this.content=content;
        this.thumbnail = thumbnail;
        this.tags = tags;
    }

    public Items toEntity() {
        return Items.builder()
                .name(name).content(content).thumbnail(thumbnail).tags(tags).price(price).build();
    }
}
