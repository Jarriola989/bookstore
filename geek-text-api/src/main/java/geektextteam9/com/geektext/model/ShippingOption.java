package geektextteam9.com.geektext.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "shipping_address")
public class ShippingOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToMany(mappedBy = "hasShippingOptions")
    List<User> shipOptions;

    @Column(name = "nickname")
    private String shippingNickname;
    @Column(name = "address")
    private String address;

    public ShippingOption(@JsonProperty("nickname") String shippingNickname,
                          @JsonProperty("address") String address){
        this.shippingNickname = shippingNickname;
        this.address = address;
    }

    public ShippingOption(){
        this.shippingNickname = "";
        this.address = "";
    }

    public Integer getId(){
        return id;
    }

    public String getShippingNickname(){
        return shippingNickname;
    }

    public void setShippingNickname(String shippingNickname){
        this.shippingNickname = shippingNickname;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address = address;
    }

}
