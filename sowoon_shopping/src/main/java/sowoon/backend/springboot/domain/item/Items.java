package sowoon.backend.springboot.domain.item;

import lombok.Builder;
import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "items")
@Getter
public class Items{

    @Id
    private String id;
    private final String name;
    private final String content;
    private final String price;
    private final String thumbnail;
    private final String tags[];
    private Date publishedDate = new Date();

    @Builder
    public Items(String name, String content, String price, String thumbnail, String tags[]){
        this.name = name;
        this.content = content;
        this.price = price;
        this.thumbnail = thumbnail;
        this.tags = tags;
    }

    public String getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public String[] getTags() {return tags; }
//
//    public ObjectId getId() {
//        return id;
//    }

    public String getThumbnail() {
        return thumbnail;
    }
}
