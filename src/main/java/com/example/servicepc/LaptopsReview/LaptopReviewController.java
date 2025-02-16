package com.example.servicepc.LaptopsReview;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/laptops/reviews")
public class LaptopReviewController {

    private final LaptopReviewService laptopReviewService;

    @Autowired
    public LaptopReviewController(LaptopReviewService laptopReviewService) {
        this.laptopReviewService = laptopReviewService;
    }

    @PostMapping
    public ResponseEntity<LaptopReview> createLaptopReview(@RequestBody LaptopReviewDTO laptopReviewDTO) {
        LaptopReview savedReview = laptopReviewService.saveLaptopReview(laptopReviewDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
    }

    @GetMapping("/laptop/{laptopId}")
    public ResponseEntity<List<LaptopReview>> getReviewsByLaptopId(@PathVariable Long laptopId) {
        List<LaptopReview> reviews = laptopReviewService.getReviewsByLaptopId(laptopId);
        return ResponseEntity.ok(reviews);
    }
    @GetMapping("/{username}")
    public ResponseEntity<List<LaptopReview>> getReviewsByUsername(@PathVariable String username) {
        List<LaptopReview> reviews = laptopReviewService.findReviewsByUsername(username);
        if (reviews.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(reviews);
    }
}
