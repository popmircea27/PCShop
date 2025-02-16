package com.example.servicepc.users;

import com.example.servicepc.CartItem.CartItem;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "users")
public class Users implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 15)
    private String username;

    @Column(nullable = false, length = 35)
    private String email;

    @Column(nullable = false, length = 255)
    private String address;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 20)
    private String status = "not verified";

    // Câmpul pentru coșul de cumpărături
    @Column(columnDefinition = "json")
    private String shoppingCart; // Stocat ca JSON

    // Metodă pentru a obține coșul ca obiect
    @JsonIgnore
    public List<CartItem> getShoppingCartAsObject() {
        if (shoppingCart == null || shoppingCart.isEmpty()) {
            return List.of();
        }
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(shoppingCart, new TypeReference<>() {});
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse shopping cart JSON", e);
        }
    }

    // Metodă pentru a seta coșul ca JSON
    public void setShoppingCartFromObject(List<CartItem> cartItems) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            this.shoppingCart = objectMapper.writeValueAsString(cartItems);
        } catch (Exception e) {
            throw new RuntimeException("Failed to convert shopping cart to JSON", e);
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", password='" + password + '\'' +
                ", status='" + status + '\'' +
                ", shoppingCart='" + shoppingCart + '\'' +
                '}';
    }


}
