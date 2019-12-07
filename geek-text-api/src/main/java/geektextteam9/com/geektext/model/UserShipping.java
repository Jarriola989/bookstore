package geektextteam9.com.geektext.model;

public class UserShipping {
    private User user;
    private ShippingOption shippingOption;

    public UserShipping(User user, ShippingOption shippingOption) {
        this.user = user;
        this.shippingOption = shippingOption;
    }

    public UserShipping(){
        this.user = null;
        this.shippingOption = null;
    }

    public User getUser(){
        return user;
    }

    public void setUser(User user){
        this.user = user;
    }

    public ShippingOption getShippingOption(){
        return shippingOption;
    }

    public void setShippingOption(ShippingOption shippingOption){
        this.shippingOption = shippingOption;
    }
}
