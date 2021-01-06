package sowoon.backend.springboot.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import sowoon.backend.springboot.domain.user.Role;
import sowoon.backend.springboot.domain.user.User;

@Getter
@NoArgsConstructor
public class UserSaveRequestDto {
    private String name;
    private String email;
    private String image;
    private String password;

    @Builder
    public UserSaveRequestDto(String name, String email, String image, String password){
        this.name=name;
        this.email=email;
        this.image=image;
        this.password=password;
    }

    public User toEntity() {
        return User.builder()
                .name(name).email(email).image(image).password(password).role(Role.GUEST)
                .build();
    }
}
