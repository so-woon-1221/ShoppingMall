package sowoon.backend.springboot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sowoon.backend.springboot.domain.user.User;
import sowoon.backend.springboot.web.dto.UserSaveRequestDto;

@RequiredArgsConstructor
@Service
public class UserService {
    private final MongoTemplate mongoTemplate;

    @Transactional
    public User save(UserSaveRequestDto userSaveRequestDto) {
        User newUser = userSaveRequestDto.toEntity();
        mongoTemplate.insert(newUser);
        return newUser;
    }
}
