package com.example.servicepc.laptops;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, Long> {

    // Method to get the minimum price from the database
    @Query("SELECT MIN(l.price) FROM Laptop l")
    Double findMinPrice();

    // Method to find laptops filtered by maximum price, laptop type, processor type, and video card type
    @Query("SELECT l FROM Laptop l WHERE (:maxPrice IS NULL OR l.price <= :maxPrice) AND "
            + "(:laptopType IS NULL OR l.laptopType = :laptopType) AND "
            + "(:processorType IS NULL OR l.processorType = :processorType) AND "
            + "(:videoCardType IS NULL OR l.videoCardType = :videoCardType)")
    List<Laptop> findByFilters(
            @Param("maxPrice") Double maxPrice,
            @Param("laptopType") String laptopType,
            @Param("processorType") String processorType,
            @Param("videoCardType") String videoCardType);

    // Additional method to find laptops filtered by maximum price and types
    List<Laptop> findByPriceLessThanEqualAndLaptopTypeContainingAndProcessorTypeContainingAndVideoCardTypeContaining(
            BigDecimal maxPrice, String laptopType, String processorType, String videoCardType);
}
