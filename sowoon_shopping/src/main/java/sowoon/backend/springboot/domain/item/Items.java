package sowoon.backend.springboot.domain.item;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "shopping")
@Getter
public class Items{

    @Id
    private long id;
    private String name;
    private int price;
    private String image;
    private String content;

    @Builder
    public Items(String name, int price, String image, String content){
        this.name = name;
        this.price = price;
        this.image = image;
        this.content = content;
    }

    public int getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }
}
