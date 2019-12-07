package geektextteam9.com.geektext.ws;

import com.stripe.exception.StripeException;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.repository.WishlistRepository;
import geektextteam9.com.geektext.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/users")
@RestController
public class UserController {

    private UserService userService;

    @Autowired
    WishlistRepository wishlistRepository;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void createUser(@RequestBody User user) throws StripeException {
        userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path = "/{id}")
    public Optional<User> findUserById(@PathVariable("id") Integer id){
        return userService.findUserById(id);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
    }

    @PutMapping(path = "/{userId}")
    public void updateUser(@PathVariable("userId") Integer userId, @RequestBody User updatedUser){
        userService.updateUser(userId, updatedUser);
    }

//    @GetMapping(path = "/wishlist/{id}")
//    public ResponseEntity<List<Wishlist>> findById(@PathVariable Integer id) {
//        return ResponseEntity.ok(userService.findById(id).getWishlists());
//    }
//
//    @PutMapping(path = "/addWishlist/{name}/{user_id}")
//    ResponseEntity<List<Wishlist>> createWishlist(@PathVariable String name, @PathVariable Integer user_id){
//        Wishlist newWishlist = new Wishlist();
//        newWishlist.setName(name);
//        wishlistRepository.save(newWishlist);
//        User user = userService.findById(user_id);
//        user.getWishlists().add(newWishlist);
//        userService.save(user);
//        return ResponseEntity.ok(userService.findById(user_id).getWishlists());
//    }
//
//    @DeleteMapping(path = "/removeWishlist/{wishlist_id}/{user_id}")
//    ResponseEntity <List<Wishlist>> removeWishlist(@PathVariable Integer wishlist_id, @PathVariable Integer user_id ){
//        Wishlist wishlist = wishlistRepository.getOne(wishlist_id);
//        User user =userService.findById(user_id);
//        user.getWishlists().remove(wishlist);
//        wishlist.setBooks(null);
//        wishlistRepository.delete(wishlist);
//        userService.save(user);
//        return ResponseEntity.ok(user.getWishlists());
//    }
}
