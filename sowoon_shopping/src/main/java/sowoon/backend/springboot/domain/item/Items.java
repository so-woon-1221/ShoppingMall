package sowoon.backend.springboot.domain.item;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "items")
@Getter
public class Items{

    @Id
    private ObjectId id;
    private String name;
    private String content;
    private String price;
    private String tags[];

    @Builder
    public Items(String name, String content, String price, String tags[]){
        this.name = name;
        this.content = content;
        this.price = price;
        this.tags = tags;
    }

    public String getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public String[] getTags() {return tags; }
    public ObjectId getId() {
        return id;
    }
}
