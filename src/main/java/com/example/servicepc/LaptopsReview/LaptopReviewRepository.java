package com.example.servicepc.LaptopsReview;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LaptopReviewRepository extends JpaRepository<LaptopReview, Long> {
    List<LaptopReview> findAllByLaptop_Id(Long laptopId);
    List<LaptopReview> findByUser_Username(String username);
}
