package sowoon.backend.springboot.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@NoArgsConstructor
@Document(collection = "user")
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String image;
    private Role role;

    @Builder
    public User(String name, String email, String image, Role role){
        this.name=name;
        this.email=email;
        this.image=image;
        this.role=role;
    }

    public User update(String name, String picture){
        this.name=name;
        this.image=image;

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}
