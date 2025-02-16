package com.example.servicepc.CartItem;



import lombok.Data;

@Data
public class AddToCartRequest {
    private String username;
    private Long productId;
    private int quantity;
}
