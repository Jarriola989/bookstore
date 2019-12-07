package geektextteam9.com.geektext.service;
import geektextteam9.com.geektext.model.ShippingOption;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.repository.ShippingRepository;
import geektextteam9.com.geektext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShippingService {

    @Autowired
    ShippingRepository shippingRepository;
    @Autowired
    UserRepository userRepository;

    public void createShippingOption(Integer userId, ShippingOption shippingOption){
        userRepository.findById(userId).map(user -> {
            user.addShippingOption(shippingOption);
            return shippingRepository.save(shippingOption);
        });                                                             // need to throw exception later...
    }

    public List<ShippingOption> getAllShippingOptions(){
        return shippingRepository.findAll();
    }

    public List<ShippingOption> getShippingByUser(User user){
        return user.getHasShippingOptions();
    }

    public Optional<ShippingOption> findShippingOptionById(Integer id){
        return shippingRepository.findById(id);
    }

//    public void updateShippingOption(ShippingOption shippingOption){
//
//    }

    public void deleteShippingOption(Integer userId, Integer id){
        userRepository.findById(userId).map(user -> {
            user.deleteShippingOptionById(id);
            shippingRepository.deleteById(id);
            return 0;
        });

    }

}
