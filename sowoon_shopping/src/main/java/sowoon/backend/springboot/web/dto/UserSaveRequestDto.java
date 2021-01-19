package sowoon.backend.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sowoon.backend.springboot.domain.user.Role;
import sowoon.backend.springboot.domain.user.User;

import java.util.ArrayList;

@Getter
@NoArgsConstructor
public class UserSaveRequestDto {
    private String name;
    private String email;
    private String image;
    private String password;
//    private String cart[];
    private ArrayList<String> cart;

    @Builder
    public UserSaveRequestDto(String name, String email, String image, String password, ArrayList<String> cart) {
        this.name = name;
        this.email = email;
        this.image = image;
        this.password = password;
        this.cart = cart;
    }

    public User toEntity() {
        return User.builder()
                .name(name).email(email).image(image).password(password).cart(cart).role(Role.GUEST)
                .build();
    }
}
