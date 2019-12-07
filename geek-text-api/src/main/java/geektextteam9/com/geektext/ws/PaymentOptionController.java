package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.PaymentOption;
import geektextteam9.com.geektext.model.User;
import geektextteam9.com.geektext.service.PaymentOptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/")
@RestController
public class PaymentOptionController {

    private PaymentOptionService paymentOptionService;

    @Autowired
    public PaymentOptionController(PaymentOptionService paymentOptionService){
        this.paymentOptionService = paymentOptionService;
    }

    @PostMapping("/users/{userId}/payments")
    public void createPaymentOption(@PathVariable("userId") Integer userId, @RequestBody PaymentOption paymentOption){
        paymentOptionService.createPaymentOption(userId, paymentOption);
    }

    @GetMapping("/payments")
    public List<PaymentOption> getAllPaymentOptions(){
        return paymentOptionService.getAllPaymentOptions();
    }

    @GetMapping("/users/{id}/payments")
    public List<PaymentOption> getPaymentOptionsByUser(@PathVariable("id") User user){
        return paymentOptionService.getPaymentOptionsByUser(user);
    }

    @GetMapping("/users/{userId}/payments/{payId}")
    public Optional<PaymentOption> findPaymentOptionById(@PathVariable("userId") Integer userId, @PathVariable("payId") Integer payId){
        return paymentOptionService.findPaymentOptionById(payId);
    }

    @DeleteMapping("/users/{userId}/payments/{payId}")
    public void deletePaymentOption(@PathVariable("userId") Integer userId, @PathVariable("payId") Integer payId){
        paymentOptionService.deletePaymentOption(userId, payId);
    }

    @PutMapping("/users/{userId}/payments/{payId}")
    public void updatePaymentOption(@PathVariable("userId") Integer userId, @PathVariable("payId") Integer payId, @RequestBody PaymentOption updatedPaymentOption){
        paymentOptionService.updatePaymentOption(userId, payId, updatedPaymentOption);
    }
}
