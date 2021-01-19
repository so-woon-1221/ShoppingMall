package sowoon.backend.springboot.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Getter
@NoArgsConstructor
@Document(collection = "user")
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String image;
    private String password;
    private ArrayList<String> cart;
//    private String cart[];
    private Role role;

    @Builder
    public User(String name, String email, String image, Role role, String password, ArrayList<String> cart) {
        this.name = name;
        this.email = email;
        this.image = image;
        this.role = role;
        this.password = password;
        this.cart = cart;
    }

    public User update(String name, String email, String image) {
        this.name = name;
        this.image = image;
        this.email = email;

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }

    public User cartIn(String itemId){
        System.out.println(this.cart.add(itemId));
        this.cart.add(itemId);
//
//        int size = this.cart.length;
//        this.cart[size] = itemId;
        return this;
    }

//    public User cartOut(String itemId) {
//        this.cart.remove(itemId);
//
//        return this;
//    }
}
