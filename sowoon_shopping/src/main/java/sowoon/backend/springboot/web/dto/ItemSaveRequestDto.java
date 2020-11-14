package sowoon.backend.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sowoon.backend.springboot.domain.item.Items;

@Getter
@NoArgsConstructor
public class ItemSaveRequestDto {
    private String name;
    private int price;
    private String image;
    private String content;

    @Builder
    public ItemSaveRequestDto(String name, int price, String image, String content){
        this.name=name;
        this.price=price;
        this.image=image;
        this.content=content;
    }

    public Items toEntity() {
        return Items.builder()
                .name(name)
                .price(price)
                .image(image)
                .content(content)
                .build();
    }
}
