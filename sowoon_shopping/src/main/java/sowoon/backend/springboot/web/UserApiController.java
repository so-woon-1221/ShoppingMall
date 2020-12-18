package sowoon.backend.springboot.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sowoon.backend.springboot.domain.user.User;
import sowoon.backend.springboot.service.UserService;
import sowoon.backend.springboot.web.dto.UserSaveRequestDto;

@RequiredArgsConstructor
@RestController
public class UserApiController {
    private final UserService userService;

    @PostMapping("/api/login")
    public User save(@RequestBody UserSaveRequestDto userSaveRequestDto){
        return userService.save(userSaveRequestDto);
    }
}
