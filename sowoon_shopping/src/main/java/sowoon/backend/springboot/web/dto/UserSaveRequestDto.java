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

    @Builder
    public UserSaveRequestDto(String name, String email, String image){
        this.name=name;
        this.email=email;
        this.image=image;
    }

    public User toEntity() {
        return User.builder()
                .name(name).email(email).image(image).role(Role.GUEST)
                .build();
    }
}
