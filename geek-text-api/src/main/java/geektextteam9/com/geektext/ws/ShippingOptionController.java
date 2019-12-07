package geektextteam9.com.geektext.ws;
import geektextteam9.com.geektext.model.ShippingOption;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.service.ShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/")
@RestController
public class ShippingOptionController {

    private ShippingService shippingService;

    @Autowired
    public ShippingOptionController(ShippingService shippingService){
        this.shippingService = shippingService;
    }

    @PostMapping("/users/{userId}/shipping")
    public void createShippingOption(@PathVariable("userId") Integer userId, @RequestBody ShippingOption shippingOption){
        shippingService.createShippingOption(userId, shippingOption);
    }

    @GetMapping("/shipping")
    public List<ShippingOption> getAllShippingOptions(){
        return shippingService.getAllShippingOptions();
    }

    @GetMapping("/users/{userId}/shipping")
    public List<ShippingOption> getShippingByUser(@PathVariable("userId") User user){
        return shippingService.getShippingByUser(user);
    }

    @GetMapping("/users/{userId}/shipping/{shipId}")
    public Optional<ShippingOption> findShippingOptionById(@PathVariable("userId") Integer userId, @PathVariable("shipId") Integer shipId){
        return shippingService.findShippingOptionById(shipId);
    }

    @DeleteMapping("/users/{userId}/shipping/{shipId}")
    public void deleteShippingOption(@PathVariable("userId") Integer userId, @PathVariable("shipId") Integer shipId){
        shippingService.deleteShippingOption(userId, shipId);
    }

//    public void updateShippingOption(ShippingOption updatedShippingOption){
//        shippingService.updateShippingOption(updatedShippingOption);
//    }
}
