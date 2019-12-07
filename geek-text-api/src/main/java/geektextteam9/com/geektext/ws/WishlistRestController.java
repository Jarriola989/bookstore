package geektextteam9.com.geektext.ws;

import geektextteam9.com.geektext.model.Book;
import geektextteam9.com.geektext.model.Wishlist;
import geektextteam9.com.geektext.repository.BookRepository;
import geektextteam9.com.geektext.service.UserService;
import geektextteam9.com.geektext.service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/wishlist")
public class WishlistRestController {
    @Autowired
    WishlistService wishlistService;

    @Autowired
    UserService userService;

    @Autowired
    BookRepository bookRepository;


    @GetMapping(path = "{id}")
    public ResponseEntity <Wishlist> findById(@PathVariable Integer id) {
        return ResponseEntity.ok(wishlistService.findById(id));
    }


//    @PutMapping(path = "/addBook/{wishlist_id}/{book_id}")
//    public ResponseEntity <Wishlist> addBook(@PathVariable Integer book_id, @PathVariable Integer wishlist_id){
//        Book book = bookRepository.getOne(book_id);
//        Wishlist wishlist = wishlistService.findById(wishlist_id);
//        wishlist.getBooks().add(book);
//        wishlistService.save(wishlist);
//        return ResponseEntity.ok(wishlistService.findById(wishlist_id));
//    }
//
////    @PutMapping(path = "moveBook/{origList}/{destList}/{book_id}/{user_id}")
////    public ResponseEntity <List<Wishlist>> moveBook(@PathVariable Integer book_id, @PathVariable Integer origList, @PathVariable Integer destList, @PathVariable Integer user_id){
////        Book book = bookRepository.getOne(book_id);
////        Wishlist original = wishlistService.findById(origList);
////        Wishlist destination = wishlistService.findById(destList);
////        original.getBooks().remove(book);
////        destination.getBooks().add(book);
////        wishlistService.save(original);
////        wishlistService.save(destination);
////        return  ResponseEntity.ok(userService.findById(user_id).getWishlists());
////    }
//
//    @DeleteMapping(path = "removeBook/{wishlist_id}/{book_id}")
//    public ResponseEntity <Wishlist> removeBook(@PathVariable Integer book_id, @PathVariable Integer wishlist_id){
//        Book book = bookRepository.getOne(book_id);
//        Wishlist wishlist = wishlistService.findById(wishlist_id);
//        wishlist.getBooks().remove(book);
//        wishlistService.save(wishlist);
//        return ResponseEntity.ok(wishlistService.findById(wishlist_id));
//    }



}
