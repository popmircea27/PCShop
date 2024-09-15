package com.example.servicepc.LaptopsReview;

import com.example.servicepc.laptops.Laptop;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class LaptopReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "laptop_id")
    private Laptop laptop;

    private Long userId;
    private int rating;
    private String comment;
    private LocalDateTime createdAt;
}
