package com.example.servicepc.LaptopsReview;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LaptopReviewRepository extends JpaRepository<LaptopReview, Long> {
    List<LaptopReview> findByLaptopId(Long laptopId);
}
