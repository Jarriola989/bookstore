package geektextteam9.com.geektext.model;


import com.fasterxml.jackson.annotation.*;
import com.stripe.Stripe;
import com.stripe.model.Customer;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "user_shipping_options",
        joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "address_id", referencedColumnName = "id")
    )
    private List<ShippingOption> hasShippingOptions;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_payment_options",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "payment_id", referencedColumnName = "id")
    )
    private List<PaymentOption> hasPaymentOptions;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    //@JsonInclude(JsonInclude.Include.NON_NULL)
    private String email;

    @Column(name = "username")
    //@JsonInclude(JsonInclude.Include.NON_NULL)
    private String username;

    @Column(name = "password")
    //@JsonInclude(JsonInclude.Include.NON_NULL)
    private String password;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "customerid")
    private String customerId;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_wishlist",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "wishlist_id", referencedColumnName = "id"))
//    //@JsonManagedReference
    private List<Wishlist> wishlists;

//    public User(@JsonProperty("first_name") String firstName,
//                @JsonProperty("last_name") String lastName,
//                @JsonProperty("email") String email,
//                @JsonProperty("username") String username,
//                @JsonProperty("password") String password,
//                @JsonProperty("nickname") String nickname,
//                List<ShippingOption> hasShippingOptions,
//                List<PaymentOption> hasPaymentOptions,
//                List<Wishlist> wishlists,
//                List<Review> reviews)
//    {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.email = email;
//        this.username = username;
//        this.password = password;
//        this.nickname = nickname;
//        this.hasPaymentOptions = hasPaymentOptions;
//        this.hasShippingOptions = hasShippingOptions;
//        this.reviews = reviews;
//        this.wishlists = wishlists;
//    }

    public User(@JsonProperty("first_name") String firstName,
                @JsonProperty("last_name") String lastName,
                @JsonProperty("email") String email,
                @JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("nickname") String nickname){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
//        this.hasPaymentOptions = new ArrayList<PaymentOption>();
//        this.hasShippingOptions = new ArrayList<ShippingOption>();
//        this.reviews = new ArrayList<Review>();
//        this.wishlists = new ArrayList<Wishlist>();
    }

    public User(){
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.username = null;
        this.password = null;
        this.nickname = null;
        this.customerId = null;
//        this.hasPaymentOptions = null;
//        this.hasShippingOptions = null;
//        this.reviews = null;
//        this.wishlists = null;
    }

    public Integer getId(){
        return id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName = lastName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getNickname(){
        return nickname;
    }

    public void setNickname(String nickname){
        this.nickname = nickname;
    }

    //Shipping Method getters/setters
    public List<ShippingOption> getHasShippingOptions(){
        return hasShippingOptions;
    }

    public void setHasShippingOptions(List<ShippingOption> shippingOptions){
        this.hasShippingOptions = shippingOptions;
    }

    public void addShippingOption(ShippingOption newShipping){
        hasShippingOptions.add(newShipping);
    }

    public void deleteShippingOptionById(Integer id){
//        hasShippingOptions.stream().map(shippingOption -> {
//            if(shippingOption.getId() == id){
//                return hasShippingOptions.remove(shippingOption);
//            }else{
//                return 1;
//            }
//        });     //buggy code
        hasShippingOptions.removeIf(shippingOption -> shippingOption.getId().equals(id));

    }

    //Payment Method getters/setters
    public List<PaymentOption> getHasPaymentOptions(){
        return hasPaymentOptions;
    }

    public void setHasPaymentOptions(List<PaymentOption> paymentOptions){
        this.hasPaymentOptions = paymentOptions;
    }

    public void addPaymentOption(PaymentOption newPayment){
        hasPaymentOptions.add(newPayment);
    }

    public void deletePaymentOptionById(Integer id) {
        hasPaymentOptions.removeIf(paymentOption -> paymentOption.getId().equals(id));      //find card by id to delete
    }

    public void updatePaymentOption(Integer payId, PaymentOption paymentOption){
        for(int i=0; i<hasPaymentOptions.size(); i++){
            PaymentOption p = hasPaymentOptions.get(i);
            if(p.getId() == payId){
                hasPaymentOptions.set(i, paymentOption);
            }
        }
    }

    public List<Review> getReviews(){
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public String getCustomerId(){
        return customerId;
    }

    public void setCustomerId(String customerId){
        this.customerId = customerId;
    }

//    public List<Wishlist> getWishlists() {
//        return wishlists;
//    }
//
//    public void setWishlists(List<Wishlist> wishlists) {
//        this.wishlists = wishlists;
//    }

//    Stripe.apiKey = "sk_test_9jNDZz79rostxJOPctBH3L2t00oc2ShecV";
//
//    Map<String, Object> params = new HashMap<>();
//    params.put(
//        "email",
//        this.email
//        );
//
//    Customer customer = Customer.create(params);

}

