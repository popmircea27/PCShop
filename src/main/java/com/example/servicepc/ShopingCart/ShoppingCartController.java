package com.example.servicepc.ShopingCart;
import com.example.servicepc.CartItem.AddToCartRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class ShoppingCartController {

    private final ShoppingCartService shoppingCartService;

    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody AddToCartRequest request) {
        shoppingCartService.addToCart(request.getUsername(), request.getProductId(), request.getQuantity());
        return ResponseEntity.ok("Produs adăugat cu succes în coș!");
    }
}
