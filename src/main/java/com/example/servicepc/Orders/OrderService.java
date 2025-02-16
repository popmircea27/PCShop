package com.example.servicepc.Orders;




import com.example.servicepc.users.Users;
import com.example.servicepc.users.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UsersRepository userRepository;

    public List<Order> getOrdersByUsername(String username) {
        Optional<Users> userOptional = Optional.ofNullable(userRepository.findByUsername(username));
        if (userOptional.isPresent()) {
            Users user = userOptional.get();
            // Căutăm comenzile utilizatorului după userId
            return orderRepository.findByUserId(user.getId());
        } else {
            return Collections.emptyList(); // Dacă utilizatorul nu există, returnează o listă goală
        }
    }
}


