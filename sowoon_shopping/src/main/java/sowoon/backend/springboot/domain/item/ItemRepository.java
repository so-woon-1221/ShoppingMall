package sowoon.backend.springboot.domain.item;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Items, Long> {
    public Items findByName(String name);
}
