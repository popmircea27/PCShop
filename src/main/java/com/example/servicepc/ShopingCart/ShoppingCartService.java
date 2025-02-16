package com.example.servicepc.ShopingCart;

import com.example.servicepc.CartItem.CartItem;
import com.example.servicepc.users.Users;
import com.example.servicepc.users.UsersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShoppingCartService {

    @Autowired
    private UsersRepository usersRepository;

    public void addToCart(String username, Long productId, int quantity) {
        Users user = usersRepository.findByUsername(username);
              if(user==null){
                  return;
              }

        // Obține coșul curent
        List<CartItem> cartItems = user.getShoppingCartAsObject();

        // Verifică dacă produsul există deja în coș
        boolean found = false;
        for (CartItem item : cartItems) {
            if (item.getProductId().equals(productId)) {
                item.setQuantity(item.getQuantity() + quantity);
                found = true;
                break;
            }
        }

        // Adaugă produsul nou dacă nu există deja
        if (!found) {
            CartItem newItem = new CartItem();
            newItem.setProductId(productId);
            newItem.setQuantity(quantity);
            cartItems.add(newItem);
        }

        // Salvează coșul actualizat
        user.setShoppingCartFromObject(cartItems);
        usersRepository.save(user);
    }
}