package geektextteam9.com.geektext.service;

import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.repository.WishlistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    public Wishlist findById(int id){return wishlistRepository.getOne(id);}

    public Wishlist save(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }
}
