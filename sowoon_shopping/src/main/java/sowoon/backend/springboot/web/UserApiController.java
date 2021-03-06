package sowoon.backend.springboot.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import sowoon.backend.springboot.domain.user.User;
import sowoon.backend.springboot.service.UserService;
import sowoon.backend.springboot.web.dto.UserSaveRequestDto;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserApiController {
    private final UserService userService;

    @PostMapping("/api/register")
    public User save(@RequestBody UserSaveRequestDto userSaveRequestDto) {
        System.out.println(userSaveRequestDto.getCart());
        return userService.save(userSaveRequestDto);
    }

    @PostMapping("/api/register/check")
    public Boolean check(@RequestBody String email) {
        return userService.checkSame(email);
    }

    @PostMapping("/api/login")
    public String login(@RequestBody String info) {
        return userService.logIn(info);
    }

    @PostMapping("/api/user/cartIn")
    public User cartIn(@RequestBody String info) {
        return userService.cartIn(info);
    }

    @GetMapping("/api/{user}/cart")
    public List<String> getCart(@PathVariable String user) {
        return userService.getCart(user);
    }
}
