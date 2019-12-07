package geektextteam9.com.geektext.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void createUser(User user) throws StripeException {
        Stripe.apiKey = "sk_test_9jNDZz79rostxJOPctBH3L2t00oc2ShecV";

        Map<String, Object> params = new HashMap<>();
        params.put("name", user.getFirstName()+ " " +user.getLastName());
        params.put(
                "email",
                user.getEmail()
        );

        Customer customer = Customer.create(params);
        user.setCustomerId(customer.getId());
        userRepository.save(user);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public Optional<User> findUserById(Integer id){
        return userRepository.findById(id);
    }

    public void updateUser(Integer userId, User updatedUser){
        getAllUsers().stream().forEach(user -> {
            if(user.getId() == userId){
                userRepository.save(updatedUser);
            }
        });

    }

    public void deleteUser(Integer id){
        userRepository.deleteById(id);
    }

    public User findById(int id) {
        return userRepository.getOne(id);
    }

    public User save(User wishlist) {
        return userRepository.save(wishlist);    }
}
