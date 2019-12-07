package geektextteam9.com.geektext.repository;

import geektextteam9.com.geektext.model.ShippingOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShippingRepository extends JpaRepository<ShippingOption, Integer> {
}
