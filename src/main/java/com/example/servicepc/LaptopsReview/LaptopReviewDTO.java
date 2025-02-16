package com.example.servicepc.LaptopsReview;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class LaptopReviewDTO {
    private Long laptopId;
    private Long userId;
    private int rating;
    private String bodyReview;
    private LocalDateTime dataCreare;
}
