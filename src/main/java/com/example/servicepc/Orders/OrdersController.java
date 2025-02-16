package com.example.servicepc.Orders;

import com.example.servicepc.users.Users;
import com.example.servicepc.users.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/user/{username}")
    public ResponseEntity<List<Order>> getOrdersByUsername(@PathVariable String username) {
        List<Order> orders = orderService.getOrdersByUsername(username);
        if (orders.isEmpty()) {
            return ResponseEntity.noContent().build();  // Dacă nu există comenzi
        }
        return ResponseEntity.ok(orders);
    }
}

