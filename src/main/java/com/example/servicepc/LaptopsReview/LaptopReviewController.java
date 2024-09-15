package com.example.servicepc.LaptopsReview;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class LaptopReviewController {
    private final LaptopReviewRepository laptopReviewRepository;

    public LaptopReviewController(LaptopReviewRepository reviewRepository) {
        this.laptopReviewRepository = reviewRepository;
    }

    @PostMapping
    public LaptopReview leaveReview(@RequestBody LaptopReview review) {
        return laptopReviewRepository.save(review);
    }

    @GetMapping("/laptop/{laptopId}")
    public List<LaptopReview> getReviewsByLaptop(@PathVariable Long laptopId) {
        return laptopReviewRepository.findByLaptopId(laptopId);
    }
}
