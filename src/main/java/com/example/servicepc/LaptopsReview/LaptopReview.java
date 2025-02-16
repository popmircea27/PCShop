package com.example.servicepc.LaptopsReview;

import com.example.servicepc.laptops.Laptop;
import com.example.servicepc.users.Users;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "laptopsReviews")
public class LaptopReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "laptop_id", nullable = false)
    private Laptop laptop;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    private int rating;
    private String bodyReview;

    @Column(name = "data_creare")
    private LocalDateTime dataCreare;


}
