package sowoon.backend.springboot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sowoon.backend.springboot.domain.user.User;
import sowoon.backend.springboot.web.dto.UserSaveRequestDto;

import javax.jws.soap.SOAPBinding;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    @Autowired
    private final MongoTemplate mongoTemplate;

    @Transactional
    public User save(UserSaveRequestDto userSaveRequestDto) {
        User newUser = userSaveRequestDto.toEntity();

        mongoTemplate.insert(newUser);
        return newUser;
    }

    @Transactional
    public Boolean checkSame(String email) {
        String mail =email.substring(10, email.length()-2);
        System.out.println(mail);
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("email").is(mail));
        Query query = new Query(criteria);

        //동일한 내용이 없을땐 트루 있으면 false
        if (mongoTemplate.find(query, User.class).isEmpty()) {
            System.out.println("true");
            return true;
        } else {
            System.out.println("false");
            return false;
        }
    }
}
