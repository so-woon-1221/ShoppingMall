package sowoon.backend.springboot.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sowoon.backend.springboot.domain.user.User;
import sowoon.backend.springboot.web.dto.UserSaveRequestDto;

import java.util.ArrayList;
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
        String mail = email.substring(10, email.length() - 2);
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

    @Transactional
    public String logIn(String info) {
        String[] infos = info.split(",");
        String mail = infos[0].substring(10, infos[0].length() - 1);
        String word = infos[1].substring(12, infos[1].length() - 2);
        System.out.println(mail + "+" + word);
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("email").is(mail), Criteria.where("password").is(word));
        Query query = new Query(criteria);

        List<User> loginUser = mongoTemplate.find(query, User.class);
        if (loginUser.isEmpty()) {
            return "No";
        } else {
            return mail;
        }
    }

    @Transactional
    public User cartIn(String info) {
        System.out.println(info);
        String[] infos = info.split(",");
        String item = infos[0].substring(11, infos[0].length()-1);
        String user = infos[1].substring(8, infos[1].length()-2);
        System.out.println(item + " + " + user);
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("email").is(user));
        Query query = new Query(criteria);

        List<User> tempUser = mongoTemplate.find(query, User.class);
        User loginUser = tempUser.get(0);

        ArrayList<String> cart = loginUser.getCart();
        cart.add(item);

        Update update = new Update();
        update.set("cart", cart);

        mongoTemplate.updateFirst(query, update, "user");

        return mongoTemplate.find(query, User.class).get(0);
    }

    @Transactional
    public List<String> getCart(String user) {
        System.out.println(user);
        Criteria criteria = new Criteria();
        criteria.andOperator(Criteria.where("email").is(user));
        Query query = new Query(criteria);

        List<User> tempUser = mongoTemplate.find(query, User.class);
        User loginUser = tempUser.get(0);

        return loginUser.getCart();
    }
}
