package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "payment_method")
public class PaymentOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToMany(mappedBy = "hasPaymentOptions")
    List<User> payOptions;

    @Column(name = "card_nickname")
    private String cardNickname;
    @Column(name = "card_number")
    private Long cardNumber;
    @Column(name = "expiration")
    private String expiration;
    @Column(name = "cvv")
    private int cvv;

    public PaymentOption(@JsonProperty("card_nickname") String cardNickname,
                         @JsonProperty("card_number") Long cardNumber,
                         @JsonProperty("expiration") String expiration,
                         @JsonProperty("cvv") int cvv){
        this.cardNickname = cardNickname;
        this.cardNumber = cardNumber;
        this.expiration = expiration;
        this.cvv = cvv;
    }


    public PaymentOption(){
        this.cardNickname = "";
        this.cardNumber = null;
        this.expiration = "";
        this.cvv = 0;
    }

    public Integer getId(){
        return id;
    }

    public String getCardNickname(){
        return cardNickname;
    }

    public void setCardNickname(String cardNickname){
        this.cardNickname = cardNickname;
    }

    public Long getCardNumber(){
        return cardNumber;
    }

    public void setCardNumber(Long cardNumber){
        this.cardNumber = cardNumber;
    }

    public String getExpiration(){
        return expiration;
    }

    public void setExpiration(int exp_month, int exp_year){
        this.expiration = exp_month + "/" + exp_year;
    }

    public void setExpiration(String expiration){
        this.expiration = expiration;
    }

    public int getCvv(){
        return cvv;
    }

    public void setCvv(int cvv){
        this.cvv = cvv;
    }

}
